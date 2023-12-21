import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../componenets/ui/title";
import Colors from "../constants/colors";
import PrimaryButton from "../componenets/ui/PrimaryButtons";

function GameOverScreen() {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X </Text> 
            rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text> 

        <PrimaryButton>Start New Game!</PrimaryButton>    
    </View>;
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer :{
        flex: 1,
        padding : 24,
        justifyContent : 'center',
        alignItems: 'center'
    },
     imageContainer :{
        width:300,
        height: 300,
        borderRadius:150,
        borderWidth: 4,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36 
     },
     image:{
        height: '100%',
        width: '100%'
     },
     summaryText :{
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign:'center'
     },
     highlight:{
        fontFamily:'open-sans-bold',
        color: Colors.primary500
     }  

});