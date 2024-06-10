import {FlatList, StyleSheet, Text, View, Pressable} from "react-native";

export const Items = ({ items, onDelete }) => {
    return <View style={styles.listWrapper}>
        <Text style={styles.itemsWrapper}>Items List...</Text>
        <FlatList
            data={items}
            renderItem={(itemData) => <Pressable onPress={onDelete.bind(this, itemData.item.key)}>
                <View style={styles.goalItem}>
                    <Text style={styles.goalItemText} >{itemData.item.text}</Text>
                </View>
            </Pressable>}
            keyExtractor={(item) => item.key}
        />
    </View>
};


const styles = StyleSheet.create({
    listWrapper: {
        flex: 14,
    },
    itemsWrapper: {
        marginBottom: 12
    },
    goalItem: {
        padding: 8,
        backgroundColor: '#045765',
        marginTop: 8,
        borderRadius: 6,
    },
    goalItemText: {
        color: '#fff',
    }
});
