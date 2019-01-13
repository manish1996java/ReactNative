import React from 'react';
import { TouchableOpacity,View, StyleSheet, Text ,TextInput} from 'react-native';

export const Number=(props)=>{
    let rows = [];
    let num = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
    for(let i=0;i<4;i++){
        let row = []
        for(let j=0;j<3;j++){
            row.push(
            <TouchableOpacity onPress={()=>props.onPress(num[i][j])} style={styles.btn}>
                <Text style={[styles.contentSize,styles.whiteColor]}>{num[i][j]}</Text>
            </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
    }
    return(
            <View style={styles.number}>
            {rows}
            </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentSize: {
        fontSize: 30
    },
    button: {
        flex: 7,
        flexDirection: 'row'
    },
    number: {
        flex: 3,
        backgroundColor: '#606A73'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    whiteColor: {
        color: 'white'
    },
})