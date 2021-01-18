import React, { useContext, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Button } from 'react-native-elements'

import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation: { getParam } }) => {
    const { state: { tracks }, deleteTrack } = useContext(TrackContext);
    const _id = getParam('_id')
    const track = tracks.find(t => t._id === _id)
    const coords = track.locations.map(({ coords }) => coords)
    const mapRef = useRef()


    const getMeanPoint = () => {
        let sumLat = 0;
        let sumLon = 0;
        let nPoints = track.locations.length
        track.locations.forEach(({ coords: { latitude, longitude } }) => {
            sumLat += latitude
            sumLon += longitude
        })
        return { latitude: sumLat / nPoints, longitude: sumLon / nPoints }

    }
    const initialCoords = getMeanPoint()
    return (
        <>
            <Text style={{ fontSize: 48 }}>
                {track.name}
            </Text>
            <MapView
                ref={mapRef}
                style={style.map}
                initialRegion={{
                    ...initialCoords,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
                onLayout={() => mapRef.current.fitToCoordinates(coords,
                    {
                        edgePadding: {
                            top: 10,
                            right: 10,
                            bottom: 10,
                            left: 10
                        }, animated: false
                    })}   >


                <Polyline
                    coordinates={coords} />
            </MapView>
            <Button
                title="Remove this track"
                buttonStyle={{ backgroundColor: 'red',
                 marginHorizontal: 30,
                 marginTop: 25 }}
                onPress={() => deleteTrack(track._id)} />

        </>)
}

const style = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen