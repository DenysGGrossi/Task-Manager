import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons';  


export default function Home () {
    
    return (
        <SafeAreaView>
            <View style={headerStyles.header}>
                <Text style={headerStyles.pageTitle}>
                    Tasks
                </Text>
                <View style={headerStyles.buttonContainer}>
                    <TouchableOpacity style={headerStyles.topBarButton}>
                        <FontAwesome6 name="add" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            
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
    topBarButton: {
        marginHorizontal: 16
    }
})
