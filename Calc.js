import React,{Component} from 'React';
import { TouchableOpacity,View, StyleSheet, Text ,TextInput} from 'react-native';
import {Operation} from '../models/Operation';
import { ThemeProvider, Avatar, Icon } from 'react-native-elements';
import { Operators } from '../component/Operators';
import { Number } from '../component/Number';
import { Input } from '../component/Input';
import {Calculationbox} from '../component/Calculationbox';
export default class Calc extends Component{
    constructor(props){
        super(props);
        this.state ={result: "",value: ""};
    }
    handleChangesText(event){
        this.setState({...this.state,result: event.target.value})
    }

    onPressed(buttonvalue){
        if(buttonvalue == '=')
        {
            this.setState({result: Operation.doCompute(this.state.result), value: Operation.doCompute(this.state.result)})
        }else{
            this.setState({result: this.state.result+buttonvalue})
        }
    }
    onNumPressed(buttonvalue){
        // if(buttonvalue == 'D'){
            
        // }
        
        const lastele = this.state.result.split('').pop();
        if(lastele== '+'||lastele=='-'||lastele=='*'||lastele=='/')
        {
            return;
            // let temp = this.state.result.split('')
            // temp.pop();
            // this.setState({...this.state,result:temp});
        }

        if(this.state.result != ""){
        this.setState({value: Operation.doCompute(this.state.result)})
        }else{
            this.setState({value: ""})
        }

        switch (buttonvalue) {
            case 'Del': 
                  
                let text = this.state.result.split('')
                text.pop()
                this.setState({result: text.join('')})
                    
                // this.setState({result: text})
            
            break;
            case '+':
            case '-':            
            case '/':
            case '*':
            if(this.state.result == ""){
                return;
            }
           
            this.setState({result: this.state.result+buttonvalue})
            
            break;   
        }
    }
    render(){
        return(   
            <View style={styles.container}>
                <Input change={this.handleChangesText.bind(this)} results={this.state.result}/>
                <Calculationbox calvalue={this.state.value}/>
                {/* <View style={styles.calculation}>    
                    <Text style={styles.calculationText}>{this.state.value}</Text>
                </View> */}
                <View style={styles.button}>
                    <Number onPress={this.onPressed.bind(this)}/>
                    <Operators onNumPress={this.onNumPressed.bind(this)}/>   
                </View>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calculationText: {
        fontSize: 30
    },
    contentSize: {
        fontSize: 30
    },
    whiteColor: {
        color: 'white'
    },
    lightblue: {
        color: '#386c9c'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    result: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        fontSize: 40,
        color: 'white'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'green',
        color: 'white',
        alignItems: 'flex-end'

    },
    button: {
        flex: 7,
        // backgroundColor: 'blue',
        flexDirection: 'row'
    },
    number: {
        flex: 3,
        backgroundColor: '#606A73'
    },
    operations: {
        flex: 1,
        color:'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black'
    }


})