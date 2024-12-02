import { Pressable,  Image , Text, View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const locImage = require("../assets/images/img1.jpeg")
export default function Home(){
    return(
        <View style={styles.container}>
            <Image source={locImage} style = {styles.image}></Image>
            <Text style = {{ textAlign: "center", margin:10 , fontSize: 55}}> Home</Text>
            <Icon name="home" size={60} color="black" style={{ textAlign: "center", paddingBottom: 20}}/>
           <Pressable style={styles.action_buttons} onPress={()=> console.log("Profile is pressed")}>
                <Text style={styles.text_styles}>Profile</Text>
            </Pressable>
            <Pressable style={styles.action_buttons} onPress={()=> console.log("Settings is pressed")}>
                <Text style={styles.text_styles}>Setting</Text>
            </Pressable>
            <Pressable style={styles.action_buttons} onPress={()=> console.log("Logout is pressed")}>
                <Text style={styles.text_styles}>Logout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "plum"
    },
    image:{
        borderRadius : 20,
        marginBottom: 50,
    },
    action_buttons:{
        flex:100,
        backgroundColor: "white",
        margin:20,
        borderRadius: 10,
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    text_styles:{
        textAlign: "center",
        fontSize: 30
    }
})