import { StyleSheet , View , Text , Platform } from "react-native";
import PokemonCard from "./PokeCard";

export default function Pokemon(){
    const charMander={
        name:"Charmander",
        image: require("../assets/images/char.jpeg"),
        type: "Fire",
        hp: 39,
        moves:["scratch", "growl" , "leer"],
        weakness: ["water" , "rock"]
    }
    const pickachu={
        name:"Pickachu",
        image: require("../assets/images/pick.jpeg"),
        type: "electric",
        hp: 35,
        moves: ["Quick Attack", "thunderbolt", "Tail Whip"],
        weakness: ["Ground"]

    }
    const bulb={
        name:"bulbasaur",
        image: require("../assets/images/bulb.jpeg"),
        type:"Grass",
        hp:40,
        moves:["Tackle" , "Vine Whip"],
        weakness:["Fire","Ice","Flying"]

    }
    return(
        <View>
            <PokemonCard{...charMander}/>
            <PokemonCard{...pickachu}/>
            <PokemonCard{...bulb}/>
        </View>
    )
}

