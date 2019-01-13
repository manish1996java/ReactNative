import React from 'react';
import { TouchableOpacity,View, StyleSheet, Text ,TextInput} from 'react-native';

export const Input=(props)=>{
    return(
        <View style={styles.result}>
            <TextInput style={styles.resultText} onChange={props.change}>    {props.results}   </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    resultText: {
        fontSize: 40,
        color: 'white'
    },
    result: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
})