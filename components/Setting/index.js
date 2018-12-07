import React, { Component } from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';

const wheelPickerData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
const now = new Date()

class Setting extends Component {

    render(){
        return (
            <View style={styles.container}>
                {/* <View style={styles.titleView}> */}
                    <View style={{flexDirection: 'row',  alignItems : "center", justifyContent : "center"}}>
                        <Text style={styles.titleText}>시</Text>
                        <Text style={styles.titleText}>분</Text>
                        <Text style={styles.titleText}>초</Text>
                    </View>

                    <View style={{flexDirection: 'row',  alignItems : "center", justifyContent : "center"}}>
                        <Picker style={{ height: 50, width: 90, color : "white" }}>
                            <Picker.Item label="00" value='0' />
                            <Picker.Item label="01" value='1' />
                        </Picker>
                        <Picker style={{ height: 50, width: 90, color : "white" }}>
                            <Picker.Item label="00" value='0' />
                            <Picker.Item label="01" value='1' />
                        </Picker>
                        <Picker style={{ height: 50, width: 90, color : "white" }}>
                            <Picker.Item label="00" value='0' />
                            <Picker.Item label="01" value='1' />
                        </Picker>
                {/* </View> */}
                    </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow : 1,
        backgroundColor : "#58E0CF",
        alignItems : "center",
        justifyContent : "center"
    },
    titleView:{
        flex : 2,
        justifyContent : "center",
        alignItems : "center",
        flexDirection: 'column',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent : "center",
        color : "white",
        alignItems : "center",
        marginLeft: "10%",
        marginRight: "10%",
    },
    hour: {
        flex : 1,
        backgroundColor : "#58E0CF"
    },
    min: {
        flex : 2,
        justifyContent : "center",
        alignItems : "center"
    },
    second: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        flexDirection: 'row',
    }
});

export default Setting