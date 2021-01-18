import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack';
import Spacer from '../components/Spacer'

const TrackForm = () => {
    const {
        startRecording,
        stopRecording,
        changeName,
        state: { name, recording, locations } } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack();

    const renderButton = () => {
        const buttonTitle = recording ? "Stop" : "Start Tracking"
        const onPressCallback = recording ? stopRecording : startRecording
        return <Button
            title={buttonTitle}
            onPress={onPressCallback}
            disabled={name ? false : true}
        />
    }

    const renderSaveButton = () => {
        if (!recording && locations.length) {
            return <Button
                title="Save track"
                onPress={saveTrack}
                disabled={name ? false : true} />
        }
    }


    return (
        <>
            <Input
                disabled={recording}
                onChangeText={changeName}
                value={name}
                placeholder="New Track Name" />
            <Spacer>
                {renderButton()}
            </Spacer>
            <Spacer>
                {renderSaveButton()}
            </Spacer>
        </>
    )
}

export default TrackForm;