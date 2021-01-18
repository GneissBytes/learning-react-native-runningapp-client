import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                const sub = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback);
                subscriber = sub

                if (!granted) {
                    throw new Error('Location permission not granted');
                } else {
                    setErr(null)
                }
            } catch (e) {
                setErr(e);
            }
        };


        if (shouldTrack) {
            startWatching()
        } else {
            if (subscriber) subscriber.remove();
            subscriber = null
        }

        return () => {
            if (subscriber) subscriber.remove();
            subscriber = null
        }
    }, [shouldTrack, callback])

    return ({ err })
}