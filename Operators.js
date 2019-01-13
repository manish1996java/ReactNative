import React from 'react';
import { TouchableOpacity,View, StyleSheet, Text ,TextInput} from 'react-native';

export const Operators=(props)=>{
        let operation =['Del','+','-','/','*'];
        let ops=[];
        for(let i=0;i<operation.length;i++){
            ops.push(
            <TouchableOpacity style={styles.btn}  onPress={()=>props.onNumPress(operation[i])}>
            <Text style={[styles.contentSize,styles.whiteColor]}>{operation[i]}</Text>
            </TouchableOpacity>)
        }
    return(
            <View style={styles.operations}>
                {ops}    
            </View>
    )
}

const styles = StyleSheet.create({
   
    button: {
        flex: 7,
        // backgroundColor: 'blue',
        flexDirection: 'row'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentSize: {
        fontSize: 30
    },
    operations: {
        flex: 1,
        color:'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    whiteColor: {
        color: 'white'
    },
})