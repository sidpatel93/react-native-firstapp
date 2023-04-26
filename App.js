import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]); // [goal1, goal2, ...
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  }

  const oncancelAddGoalHandler = () => { 
    setModalVisible(false);
  }
  
  const addGoalHandler = (enteredGoalText) => {
    setGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  
  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}></Button>
      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} onCancel={oncancelAddGoalHandler}></GoalInput>
      <View style={styles.goalsContainer}>
      <FlatList data={goals} renderItem={itemData => {
        itemData.index
        return <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalHandler}></GoalItem>
      }} alwaysBounceVertical={false} keyExtractor={(item, index) => item.id}>
      </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white',
    height: 50
  },
  goalText: {
    color: 'white',
  }
});
