import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
function PrimaryButton({children, onPress}) {
    
    function pressHandler() {
        console.log("pressed button");
    }
    
    return <View style={styles.buttonOrderContainer}>
            <Pressable  onPress={onPress} style={({pressed})=> pressed ? [styles.container, styles.pressed]:styles.container} 
                 android_ripple={{color:Colors.primary600}}> 
            <Text style={styles.buttonContainer}>{children}</Text>
            </Pressable>
        </View>
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOrderContainer :{
        borderRadius: 28,
        margin:4,
        overflow : 'hidden'
    },
    container :{
        backgroundColor :Colors.primary500,
        paddingVertical :8,
        paddingHorizontal : 16,
        elevation :2,
       
    },
    buttonContainer :{
        color: 'white',
        textAlign: 'center'
    },
    pressed :{
        opacity : 0.75
    }
});