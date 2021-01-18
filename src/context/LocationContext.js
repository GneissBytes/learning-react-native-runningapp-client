import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return { ...state, currentLocation: action.payload }
        case "ADD_LOCATION":
            return { ...state, locations: [...state.locations, action.payload] }
        case "START_RECORDING":
            return { ...state, recording: true, follow: true }
        case "STOP_RECORDING":
            return { ...state, recording: false }
        case "CHANGE_NAME":
            return { ...state, name: action.payload }
        case "CHANGE_FOLLOW":
            return { ...state, follow: !state.follow }
        case "RESET_STATE":
            return { ...state, name: "", locations: [] }
        default:
            return state
    }
}

const actions = {}

actions.startRecording = dispatch => () => {
    dispatch({ type: "START_RECORDING" })
}

actions.stopRecording = dispatch => () => {
    dispatch({ type: "STOP_RECORDING" })
}

actions.updateLocation = dispatch => (location, recording) => {
    dispatch({ type: 'UPDATE_LOCATION', payload: location })
    if (recording) dispatch({ type: 'ADD_LOCATION', payload: location })
}

actions.resetState = dispatch => () => dispatch({ type: "RESET_STATE" })

actions.changeName = dispatch => (name) => dispatch({ type: 'CHANGE_NAME', payload: name })

actions.changeFollow = dispatch => () => dispatch({ type: 'CHANGE_FOLLOW' })

export const { Context, Provider } = createDataContext(
    locationReducer,
    { ...actions },
    { recording: false, locations: [], currentLocation: null, name: "", follow: false })