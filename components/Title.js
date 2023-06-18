import { Text, View, StyleSheet } from "react-native";
function Title (){
    return(
        <View style={styles.titleContainer} >
            <Text>Total</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer:{
        backgroundColor:'white',
        margin:12,
        padding:4,
        alignItems:'center',
        borderRadius:6


    }
})

