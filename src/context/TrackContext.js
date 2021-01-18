import runtrackApi from '../api/runtrack';
import { navigate } from '../navigationRef';

import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_TRACKS":
            return { ...state, tracks: [...action.payload] }
        default:
            return state
    }
}

const actions = {}

actions.fetchTracks = dispatch => async () => {
    const response = await runtrackApi.get('/tracks')
    dispatch({ type: "FETCH_TRACKS", payload: response.data.tracks })
};

actions.createTrack = dispatch => async ({ name, locations }) => {
    const result = await runtrackApi.post('/tracks', { name, locations })
    dispatch({ type: "CREATE_TRACK", payload: result.data })

};

actions.deleteTrack = dispatch => async (trackId) => {
    try {
        navigate('TrackList')
        await runtrackApi.delete(`/tracks/${trackId}`)
        dispatch({ type: "DELETE_TRACK", payload: trackId })
    } catch (err) {
        return
    }

}

export const { Context, Provider } = createDataContext(
    trackReducer,
    { ...actions },
    { tracks: [] })