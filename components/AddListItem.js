import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

export const AddListItem = ({ onPress }) => {
    const [text, setText] = useState("");

    const onChangeText = (text) => {
        setText(text);
    }

    const onPressHandler = () => {
        if (text.length <= 0) {
            return
        }
        onPress(text)
        setText('');
    }

    return <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={onChangeText}
            value={text}
        />
        <Button title="Add goal" onPress={onPressHandler} />
    </View>
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 36,
        flex: 1
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        padding: 6,
        height: 36
    },
});
