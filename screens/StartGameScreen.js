import { TextInput, View, Text, StyleSheet, Alert, Platform } from "react-native";
import PrimaryButton from "../componenets/ui/PrimaryButtons";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../componenets/ui/title";
import  Card  from "../componenets/ui/Card";

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function  resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber); 
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >99){
            if(Platform.OS == 'web'){
                alert('Number has to be a number between 1 - 99');
            }
            Alert.alert('Invalid Number','Number has to be a number between 1 - 99', 
            [{text: 'Okay', style :'destructive', onPress:resetInputHandler }]);
            
            return;
        }
        onPickNumber(choosenNumber);    
    }

    return <View> <View style={styles.rootContainer}>
            <Title>Guess My Number</Title> 
            <View>
            <Card>
                <Text style={styles.instructionText}>Enter a Number</Text>
                <TextInput style={styles.numberInput} maxLength={2} autoCapitalize="none" 
                    autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}></TextInput>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
            </View>
        </View>
    </View>
}


export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer :{
        flex: 1,
        marginTop : 100,
        alignItems: 'center'
    },  
    inputContainer:{        
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal : 24,
        marginTop : 30,
        padding:16,
        backgroundColor:Colors.primary800,
        borderRadius : 8,
        elevation:20,
        shadowColor : 'black',
        shadowOffset :{width: 0, height: 2},
        shadowRadius : 8,
        shadowOpacity:1,
    },
    instructionText :{
        color: Colors.accent500,
        fontSize: 24
    },
    numberInput:{
        height : 50,
        width:50,
        fontSize : 32,
        borderBottomColor : Colors.accent500,
        borderBottomWidth : 2,
        color: Colors.accent500,
        marginVertical : 8,
        fontWeight : 'bold',
        alignContent :'center'
    },
    buttonsContainer:{
        flexDirection : "row",
    },
    buttonContainer:{
        flex: 1,
        alignItems:'center'
    }
});