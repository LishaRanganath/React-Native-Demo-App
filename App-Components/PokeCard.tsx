import { StyleSheet , View , Text , Platform , Image} from "react-native";

interface PokemonCardProps {
    name: string;
    image: number; //The local assets are numbers and not string keep in mind
    type: string;
    hp: number;
    moves: string[];
    weakness: string[];
  }

export default function PokemonCard(props: PokemonCardProps){
   
    const { name, image, type, hp, moves, weakness } = props;
    const getEmojiForType = (type: string) =>
        {
            switch(type.toLowerCase()){
                case "fire":
                    return {emoji: '🔥'}
                case "electric":
                    return {emoji: '⚡'}
                default:
                    return {emoji: '❓'}
            }
        }
    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text  style={styles.hp}>❤{hp}</Text>
            </View>
            <Image source={image} style={styles.image} resizeMode="contain"/>
            <View style={styles.typeContainer}>
                <Text style={styles.type}>{type} {getEmojiForType(type).emoji}</Text>
            </View>
            <View>
                <Text style={styles.moveAndWeakness}>Moves: {moves.join(" , ")}</Text>
            </View>
            <View>
                <Text style={styles.moveAndWeakness}>Weakness: {weakness.join(" , ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        card:{
            backgroundColor: "white",
            borderRadius: 16,
            borderWidth: 2,
            padding: 16,
            margin: 16,
            // justifyContent: "center",
            ...Platform.select({
                ios:
                {
                    shadowOffset: {width: 2, height:2},
                    shadowColor: "#333",
                    shadowOpacity: 0.3,
                    shadowRadius: 4

                },
                android:{
                    elevation: 5
                }
            })
        },
        nameContainer:{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10
        },
        name:{
            fontSize: 30,
            fontWeight: "bold"
        },
        hp:{
            fontSize: 20
        },
        image:{
            width: "100%",
            height: 200,
            marginBottom: 16,
            alignSelf: "center"
        },
        typeContainer:{
            borderRadius: 20,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: 'transparent',
            padding: 10,
            marginBottom: 10,
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",

        },
        type:{
            fontSize: 22,
        },
        moveAndWeakness:{
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 5
        }
    }
)