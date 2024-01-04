import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Title from "../componenets/ui/title";
import { useState, useEffect } from "react";
import NumberContainer from "../componenets/game/numberContainer";
import PrimaryButton from "../componenets/ui/PrimaryButtons";
import Card from "../componenets/ui/Card";
import InstructionText from "../componenets/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../componenets/game/guessLogItem";

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber == exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else{
        return randomNumber;
    }
}

let minBoundry =1;
let maxBoundry = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess]= useState(initialGuess);
    const [guessRounds, setGuessRounds]= useState([initialGuess]);

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess  , userNumber, onGameOver]);

    function nextGuessHandler(direction) {

        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            alert('Dont lie you know that this is wrong!');
            return ;
        }

        if (direction === 'lower') {
            maxBoundry = currentGuess;
        }
        else{
            minBoundry = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds =>[newRndNumber,...prevGuessRounds]);
    }

    const guessRoundsLength = guessRounds.length;


    function name(params) {
        
    }

    return <View style={styles.screen}> 
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View>
                    <Card>
                        <InstructionText>Higher or Lower</InstructionText>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} ><Ionicons name="md-add" size={24} color="black" /></PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} ><Ionicons name="md-remove" size={24} color="black" /></PrimaryButton>
                            </View>
                        </View>
                    </Card>
             </View>
             <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound=><Text key={guessRound}>{guessRound}</Text>)} */}
                
                <FlatList data={guessRounds} renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item}  />} 
                 keyExtractor={(item)=>item} />

             </View>
    </View>
}

export default GameScreen;
const styles = StyleSheet.create({
    screen :{
        flex : 1,
        padding: 24
    },
    title :{
        fontSize : 24,
        fontWeight : 'bold',
        color : '#ddb52f',
        textAlign : 'center',
        borderWidth : 2,
        borderColor : '#ddb52f',
        padding: 12
    },
    buttonsContainer:{
        flexDirection : "row",
    },
    buttonContainer:{
        flex: 1,
        alignItems:'center'
    },
    listContainer :{
        flex: 1,
        padding: 16
    }
});