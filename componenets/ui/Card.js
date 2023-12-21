import {View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Card({children}) {
    return  <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card:{        
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
    }
});