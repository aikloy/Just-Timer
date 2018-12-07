import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import {
    actionCreators as justActions
} from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state) {
    const {
        isPlaying,
        elapsedTime,
        timerDuration
    } = state;

    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

function mapDispatchToProps(dispatch) {
    console.log(`justActions : ${justActions}`)
    return {
        startTimer: bindActionCreators(justActions.startTimer, dispatch),
        pauseTimer: bindActionCreators(justActions.pauseTimer, dispatch),
        stopTimer: bindActionCreators(justActions.stopTimer, dispatch),
        addSecond: bindActionCreators(justActions.addSecond, dispatch),

        setTimerDuration: (value) => {
            return dispatch(justActions.setTimerDuration(value)); 
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);