import React from 'react';
import {StyleSheet , View ,Text} from 'react-native'
export const Calculationbox=(props)=>{
    return(
        
        <View style={styles.calculation}>    
            <Text style={styles.calculationText}>{props.calvalue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    calculation: {
        flex: 1,
        backgroundColor: 'green',
        color: 'white',
        alignItems: 'flex-end'
    },
    calculationText: {
        fontSize: 30
    },
})