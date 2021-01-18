import React, { useEffect, useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigationFocus } from 'react-navigation'
import { ListItem, Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import Spacer from '../components/Spacer'

const TrackListScreen = ({ navigation: { navigate }, isFocused }) => {
    const { state: { tracks }, fetchTracks } = useContext(TrackContext);

    useEffect(() => {
        fetchTracks()
    }, [isFocused])

    const renderTrackList = () => {
        if (tracks.length) {
            return (
                <Spacer>
                    <FlatList
                        data={tracks}
                        keyExtractor={({ _id }) => _id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigate('TrackDetail', { _id: item._id })} >
                                <ListItem>
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {item.name}
                                        </ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            </TouchableOpacity>
                        )}
                    />
                </Spacer>)
        }
        return (
            <Spacer>
                <Text h4>You don't have any tracks... Yet!</Text>
            </Spacer>)
    }

    return (
        <>
            <Spacer>
                <Text style={{ marginTop: 15, marginBottom: 25 }} h3>My Tracks</Text>
                {renderTrackList()}
            </Spacer>

        </>
    )
}

const style = StyleSheet.create({})

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default withNavigationFocus(TrackListScreen)