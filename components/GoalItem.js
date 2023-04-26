import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDelete.bind(this, props.id)}
             android_ripple={{color: '#dddddd'}} 
             style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
    color: 'white',
    padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
});

export default GoalItem;