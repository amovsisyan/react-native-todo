import {StyleSheet, TextInput, View, Button, Text} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!"/>
                <Button title="Add new item"/>
            </View>
            <View>
                <Text>My todo list...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 60
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        padding: 6,
    }
});
