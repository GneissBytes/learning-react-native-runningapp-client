import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native'
import MapView, { Circle, Polyline } from 'react-native-maps'
import { Button } from 'react-native-elements'

import { Context } from '../context/LocationContext'
const Map = () => {
    const { state: { currentLocation, locations, follow }, changeFollow } = useContext(Context)


    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    const renderPolyline = () => {
        if (locations.length) {
            return <Polyline coordinates={locations.map(loc => loc.coords)} />
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <MapView
                showsMyLocationButton={true}
                style={style.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={follow ? {
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                } : null}
            >
                <Circle
                    center={{ ...currentLocation.coords }}
                    radius={30}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)" />
                {renderPolyline()}
            </MapView >
            <View
                style={{
                    position: 'absolute',//use absolute position to show button on top of the map
                    bottom: '0%', //for center align
                    alignSelf: 'flex-end' //for align to right
                }}
            >
                <Button title={follow ? 'Stop following' : 'Follow'} onPress={changeFollow} />
            </View>

        </View>


    )
}





const style = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    }
})

export default Map