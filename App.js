import {useState} from "react";
import {StyleSheet, View} from 'react-native';
import {AddListItem} from "./components/AddListItem";
import {Items} from "./components/Items";

export default function App() {
    const [items, setItems] = useState(null);

    const onPress = (text) => {
        setItems([...(items || []), { text, key: Math.random().toString() }])
    }

    const onDelete = (key) => {
        setItems(items.filter(item => item.key !== key))
    }

    return (
        <View style={styles.container}>
            <AddListItem
                onPress={onPress}
            />
            <Items items={items} onDelete={onDelete} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1
    },
});
