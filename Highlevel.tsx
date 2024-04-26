import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const Highlevel=()=>{
  const [searchQuery, setSearchQuery] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([
    "What are the symptoms of COVID-19?",
    "How can I prevent the flu?",
    "What is the treatment for diabetes?",
    "What are the risk factors for heart disease?",
  ]);

  const handleSearchSubmit = () => {
    console.log("Search Query:", searchQuery);
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
      setNewQuestion("");
    }
  };

  const handleSeeMoreQuestions = () => {
    // No need to set any state, just let it scroll to show all questions
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search about medical topics"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearchSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a medical question"
          onChangeText={setNewQuestion}
          value={newQuestion}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddQuestion}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Medical Questions</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.card}>
          <Text>{index + 1}. {question}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMoreQuestions}>
        <Text>See more questions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  seeMoreButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10, // Adjust spacing if needed hello
  },
});
export default Highlevel;
