import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


type Props = {
    onCheck?: () => void;
    onDelete?: () => void;
    checked?: boolean;
    title?: string;
    description?: string;
    
}


export default function TaskCard (props : Props) {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.checkButton} onPress={props.onCheck}>
                <AntDesign name="check" size={32} color="black" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>
                    Card Title
                </Text>
                <Text style={styles.cardDescription}>
                    Card Title
                </Text>
                
            </View>
            <TouchableOpacity onPress={props.onDelete}>
                <EvilIcons name="trash" size={32} color="black" />
                    
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 120,
        width: "95%",
        backgroundColor: "#ccc",
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center",

    },
    checkButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff0",
        borderWidth: 1,
        borderColor: "#000"
    },
    textContainer: {
        padding: 8,
        alignItems: "flex-end",
        width : '70%',
        
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#000",
        borderBottomColor: "#000",
        borderBottomWidth: 2,
        width: "100%",
        alignItems: 'flex-end',
        justifyContent: "flex-end"

    },
    cardDescription: {
        fontSize: 10,
        fontWeight: "400",
        color: "#000",
        width: "100%",
        alignItems: 'flex-end',
        justifyContent: "flex-end"
    },
});