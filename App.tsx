import React, { useState } from "react";
import { View, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ProfileInfo = ({ name, profilePic }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: profilePic }} style={styles.profilePic} />
      <Text style={styles.profileName}>{name}</Text>
    </View>
  );
};

export default function App(){
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleAddAnswer = () => {
    if (answer.trim() !== '') {
      setAnswers(prevAnswers => [...prevAnswers, answer]);
      setAnswer('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileInfo name="John Doe" profilePic="https://via.placeholder.com/150" />
      <View style={styles.questionContainer}>
        <Text style={styles.label}>Question:</Text>
        <Text style={styles.questionText}>
          What is the capital of France?
        </Text>
      </View>
      <View style={styles.answerContainer}>
        <TextInput
          style={styles.answerInput}
          onChangeText={setAnswer}
          value={answer}
          placeholder="Enter your answer..."
          placeholderTextColor="#999"
          multiline={true}
        />
        <TouchableOpacity onPress={handleAddAnswer} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Answer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.answersContainer}>
        <Text style={styles.label}>Answers:</Text>
        {answers.length === 0 ? (
          <Text>No answers yet</Text>
        ) : (
          answers.map((ans, index) => (
            <Text key={index} style={styles.answer}>
              {ans}
            </Text>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  questionContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  answerContainer: {
    marginBottom: 20,
  },
  answerInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    minHeight: 100,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  answersContainer: {
    marginBottom: 20,
  },
  answer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
