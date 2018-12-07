import React, {Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, Modal } from 'react-native';
import Button from '../Button';
import { PLAYING_START, PLAYING_PAUSE, PLAYING_STOP } from './info';

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -+ minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {

    state = {
        noodleModalVisible : false,
        studyModalVisible : false
    };

    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if( (currentProps.isPlaying != PLAYING_START) && nextProps.isPlaying == PLAYING_START){
            // start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);

            this.setState({
                timerInterval
            });
        }
        if(currentProps.isPlaying == PLAYING_START && nextProps.isPlaying == PLAYING_PAUSE)
        {
            clearInterval(this.state.timerInterval);
        }
        else if(currentProps.isPlaying == PLAYING_START && nextProps.isPlaying == PLAYING_STOP){
            clearInterval(this.state.timerInterval);
        }
        console.log("The current isPlaying : " + currentProps.isPlaying + " and The new is isPlaying : " + nextProps.isPlaying);
    }
   
    setNoddleModalVisible(visible) {
        this.setState({noodleModalVisible: visible});
    }
    setStudyModalVisible(visible) {
        this.setState({studyModalVisible: visible});
    }

    render() {
        console.log("setTimerDuration" + this.props.setTimerDuration);
        const {
            title,
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            stopTimer,
            pauseTimer,
            addSecond,
            setTimerDuration
        } = this.props;

        return (
            <View style={styles.container}>
            {/* <Image style={styles.container} source={require('./assets/logo-timer.svg')} ></View> */}
                {/* <StatusBar barStyle={"light-conbtent"} /> */}
                <View style={styles.upper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.middle}>
                    <TouchableHighlight
                        onPress={() => {
                            this.setState({noodleModalVisible : true})
                        }}>
                        <Image source={require('../../assets/noodle.png')} style={{width:50, height:50, marginRight : 20}} />
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            this.setState({studyModalVisible : true})
                        }}>
                        <Image source={require('../../assets/study.png')} style={{width:50, height:50, marginLeft : 20}} />
                    </TouchableHighlight>
                    
                    {/* noodle modal */}
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.noodleModalVisible}
                        onRequestClose={() => {
                        }}>
                        <View style={{ flex:1, alignContent:"center", justifyContent:"center"}}>
                            <View>
                                <TouchableHighlight style={{}}
                                onPress={() => {
                                    stopTimer();
                                    this.setNoddleModalVisible(false);
                                    this.props.setTimerDuration(450)
                                    startTimer();
                                }}>
                                    <Text style={styles.noodleModalText}>기본</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                onPress={() => {
                                    stopTimer();
                                    this.setNoddleModalVisible(false);
                                    this.props.setTimerDuration(360)
                                    startTimer()
                                }}>
                                    <Text style={styles.noodleModalText}>꼬들꼬들</Text>
                                </TouchableHighlight>

                                 <TouchableHighlight
                                onPress={() => {
                                    stopTimer();
                                    this.setNoddleModalVisible(false);
                                    this.props.setTimerDuration(510)
                                    startTimer()
                                }}>
                                    <Text style={styles.noodleModalText}>푹퍼진</Text>
                                </TouchableHighlight>
                                
                                
                            </View>
                        </View>
                    </Modal>

                    {/* study modal */}
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.studyModalVisible}
                        onRequestClose={() => {
                        }}>
                        <View style={{ flex:1, alignContent:"center", justifyContent:"center"}}>
                            <View>
                                <TouchableHighlight style={{}}
                                onPress={() => {
                                    stopTimer();
                                    this.setStudyModalVisible(false);
                                    this.props.setTimerDuration(4800)
                                    startTimer();
                                }}>
                                    <Text style={styles.noodleModalText}>국어</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                onPress={() => {
                                    stopTimer();
                                    this.setStudyModalVisible(false);
                                    this.props.setTimerDuration(6000)
                                    startTimer()
                                }}>
                                    <Text style={styles.noodleModalText}>수학</Text>
                                </TouchableHighlight>

                                 <TouchableHighlight
                                onPress={() => {
                                    stopTimer();
                                    this.setStudyModalVisible(false);
                                    this.props.setTimerDuration(4200)
                                    startTimer()
                                }}>
                                    <Text style={styles.noodleModalText}>영어</Text>
                                </TouchableHighlight>
                                
                                
                            </View>
                        </View>
                    </Modal>

                </View>
                <View style={styles.lower}>
                    {/* <Text>BUTTONS HERE!</Text> */}
                    { isPlaying != PLAYING_START  && (
                        <Button iconName="play-circle" onPress={startTimer} />
                    )}
                    { isPlaying == PLAYING_START && (
                        <Button iconName="pause-circle" onPress={pauseTimer} style={styles.pause} />
                    )}
                    {/* <Button iconName="pause-circle" onPress={pauseTimer} /> */}
                    { isPlaying == PLAYING_START && (
                        <Button iconName="stop-circle" onPress={stopTimer} style={styles.stop} />
                    )}
                    
                </View>
                
 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#58E0CF"
    },
    upper: {
        flex : 3,
        justifyContent : "center",
        alignItems : "center"
    },
    middle: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        flexDirection: 'row',
    },
    lower: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        flexDirection: 'row',
    },
    title: {
        color : "white",
        fontSize : 60,
        fontWeight : "100",
        fontFamily: 'sans-serif'
    },
    time: {
        color : "white",
        fontSize : 100,
        fontWeight : "100",
        fontFamily: 'sans-serif'
    },
    pause : {
        marginRight : 20
    },
    stop : {
        marginLeft : 20
    },

    closeModelButton: {
        width: 40,
        borderRadius: 0,
    },
    closeModelText: {
        width: 250,
        backgroundColor: '#d84949',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    closeModelView: {
        flexDirection: 'row',
        backgroundColor: '#0e6b87',
        borderRadius: 0,
    },
    noodleModalText:{
        fontSize : 50,
        fontWeight : "100",
    }
});

export default Timer