import React from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

// Sample data for chat participants
const chatParticipants = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
  // Add more participants as needed
];

const outsidechatbox=()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Experts</Text>
      <ScrollView>
        {/* Render chatbox links for each participant */}
        {chatParticipants.map((participant) => (
          <TouchableOpacity
            key={participant.id}
            style={styles.chatBox}
          >
            <Text style={styles.chatBoxText}>{participant.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White background
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007bff", // Blue color for text
  },
  chatBox: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#007bff", // Blue color border
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#007bff", // Blue background
  },
  chatBoxText: {
    fontSize: 16,
    color: "#fff", // White color text
  },
});
export default outsidechatbox;