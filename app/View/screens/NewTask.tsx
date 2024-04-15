import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

export default function NewTask({navigation}) {
     return (<View>
        <View style={styles.header}>
            <Text style={styles.pageTitle}>
                New Task
            </Text> 
        </View>
        <View>
            <Text style={styles.label}>
                Task Title
            </Text>
            <TextInput placeholder="Insert Task Title" style={styles.titleBox}/>
            <Text style={styles.label}>
                Task Title
            </Text>
            <TextInput placeholder="Insert Task Title" style={styles.descriptionBox} multiline maxLength={140}/>
            <TouchableOpacity style={styles.confirmButton}>
                <Text>
                    Create Task
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text>
                    Cancel
                </Text>
            </TouchableOpacity>


        </View>
    </View>)
}

const styles = StyleSheet.create({
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
    },
    titleBox: {
        backgroundColor : '#ddd',
        height: 60,
        marginHorizontal: 16,

        borderRadius : 8,
        padding: 10
    },
    descriptionBox: {
        backgroundColor : '#ddd',
        height: 120,
        marginHorizontal: 16,
        justifyContent:"flex-start",
        borderRadius : 8,
        padding: 10
    },
    label : {
        marginTop: 10,
        marginHorizontal: 24,
        marginBottom: 4,
    },
    confirmButton: {
        backgroundColor: '#ff7f2a',
        height: 60,
        marginHorizontal: 16,
        marginVertical: 32,
        borderRadius : 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    cancelButton: {
        backgroundColor: '#aaa',
        height: 60,
        marginHorizontal: 16,
        marginVertical: 32,
        borderRadius : 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    }
    
})