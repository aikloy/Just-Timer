// redux ducks 

// 필요한것을 불러오고 두번째 액션을 정의

// Import
import { TIME_DURATION, PLAYING_START, PLAYING_PAUSE, PLAYING_STOP } from './components/Timer/info';
// Actions

const START_TIMER = "START_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const STOP_TIMER = "STOP_TIMER";
const ADD_SECOND = "ADD_SECOND"
const SET_TIMER_DURATION = "SET_TIMER_DURATION";

// Action Creators
function startTimer() {
    return {
        type: START_TIMER
    };
}

function pauseTimer(){
    return {
        type : PAUSE_TIMER
    };
}

function stopTimer() {
    return {
        type: STOP_TIMER
    };
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

function setTimerDuration(value){
    return {
        type: SET_TIMER_DURATION,
        value : value
    }
}

// Reducer
const initialState = {
    isPlaying: PLAYING_STOP,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

function reducer(state = initialState, action) {
    console.log("reducer action-type : " + action.type);
    console.log("reducer action-value : " + action.value);
    console.log("reducer state : " + state);

    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case STOP_TIMER:
            return applyStopTimer(state);
        case PAUSE_TIMER:
            return applyPauseTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        case SET_TIMER_DURATION:
            return applySetTimerDuration(state, action.value);
        default:
            return state;

    }
}
// Reducer Functions
function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: PLAYING_START,   
    }
}
function applyPauseTimer(state){
    return {
        ...state,
        isPlaying: PLAYING_PAUSE,   
    }
}

function applyStopTimer(state){
    return {
        ...state,
        isPlaying:PLAYING_STOP,
        elapsedTime : 0,
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < state.timerDuration)
    {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }
    else
    {
        return {
            ...state,
            isPlaying : PLAYING_STOP
        }
    }
}

function applySetTimerDuration(state, value){
    return {
        ...state,
        timerDuration : value,
    }
}
// Export Action Creators
const actionCreators = {
    startTimer,
    pauseTimer,
    stopTimer,
    addSecond,
    setTimerDuration
};


export {actionCreators};
// Export Redicer
export default reducer;