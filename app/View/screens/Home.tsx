import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons';  
import TaskCard from "../components/TaskCard";


export default function Home ({navigation}) {
    console.log("aaaaa");
    return (
        <SafeAreaView>
            <View style={headerStyles.header}>
                <Text style={headerStyles.pageTitle}>
                    Tasks
                </Text>
                <View style={headerStyles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewTask')}>
                        <FontAwesome6 name="add" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                
            </View>
            

            <ScrollView style={headerStyles.scrollContainer}>
                <TaskCard  />
                
            </ScrollView>
        </SafeAreaView>
    )
}


const headerStyles = StyleSheet.create({
    header : {
        backgroundColor: '#ff7f2a',
        flexDirection : "row",
        height : 80,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingTop: 20
        
    },
    pageTitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    buttonContainer: {
        flexDirection: 'row',

    },
    scrollContainer: {
        height: '100%',
        width: '100%',
    }
    
})
