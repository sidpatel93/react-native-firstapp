import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from 'react';

const GoalInput = props => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your Goal' onChangeText={goalInputHandler} value={enteredGoalText}>
                </TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ADD GOAL' onPress={addGoalHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.onCancel}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        margin: 5,
        padding: 8
      },
      buttonContainer: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    }
});

export default GoalInput;