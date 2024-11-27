import { Pressable,  Image , Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const locImage = require("../assets/images/img1.jpeg")
export default function Home(){
    return(
        <View style={{flex:1}}>
            <Image source={locImage}></Image>
            <Text style = {{ textAlign: "center", margin:10 , fontSize: 30}}> Home</Text>
            <Icon name="home" size={40} color="black" style={{ textAlign: "center"}}/>
           <Pressable style={{flex: 100, backgroundColor: "white", margin:20}} onPress={()=> console.log("Profile is pressed")}>
                <Text style={{textAlign: "center", fontSize: 30}}>Profile</Text>
            </Pressable>
            <Pressable style={{flex: 100, backgroundColor: "white", margin:20}} onPress={()=> console.log("Settings is pressed")}>
                <Text style={{textAlign: "center", fontSize: 30}}>Setting</Text>
            </Pressable>
            <Pressable style={{flex: 100, backgroundColor: "white", margin:20}} onPress={()=> console.log("Logout is pressed")}>
                <Text style={{textAlign: "center", fontSize: 30}}>Logout</Text>
            </Pressable>
        </View>
    )
}