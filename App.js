import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from './screens/GameScreen';
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from 'expo-app-loading';

import { useFonts } from "expo-font";
export default function App() {

  const [userNumber, setUserNumber] = useState('');
  const [gameIsOverState, setgameIsOverState] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans' :require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' :require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    console.log(fontsLoaded);
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setgameIsOverState(false);
  }

  function gameOverHandler(numberOfRounds) {
    setgameIsOverState(true);
    setGuessRounds(numberOfRounds);
  }

  function onStartNewGameHandler(params) {
    setUserNumber(null);
    setGuessRounds(0);
    
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber){
    screen = <GameScreen userNumber ={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOverState && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumer={userNumber} onStartNewGame={onStartNewGameHandler} />
  }

  return ( 
          <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}> 
            <ImageBackground style={styles.rootScreen} source={require('./assets/images/background.png')} 
              resizeMode='cover' imageStyle={styles.backgroundImage}>
               <SafeAreaView style={styles.rootScreen}> {screen} </SafeAreaView>
            </ImageBackground>  
          </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  rootScreen :{
    flex : 1,
  },
  backgroundImage :{
    opacity:0.15
  }
});
