import React, { useState } from "react";
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const ProfileInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: "https://i.pravatar.cc/150?u=1" }} style={styles.profilePic} />
    </View>
  );
};

const ChatBubble = ({ message, isCurrentUser }) => {
  return (
    <View style={[styles.chatBubble, isCurrentUser && styles.currentUserBubble]}>
      <Text style={[styles.chatText, isCurrentUser && styles.currentUserText]}>{message}</Text>
    </View>
  );
};
const chatbox=()=>{
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [chattingWithName, setChattingWithName] = useState('John Doe'); // Name of the person we are chatting with

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      // Append the new message to the messages array
      setMessages(prevMessages => [...prevMessages, messageInput]);
      // Clear the message input
      setMessageInput('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Bar displaying the name of the person we are chatting with */}
      <View style={styles.chatBar}>
        <Text style={styles.chattingWithName}>{chattingWithName}</Text>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.messageContainer}>
            <ProfileInfo />
            <ChatBubble message={msg} isCurrentUser={false} />
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatBar: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    alignItems: "center",
  },
  chattingWithName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  profileContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  chatBubble: {
    backgroundColor: "#007bff", // Change color to blue
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },

  currentUserBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
  },
  chatText: {
    fontSize: 16,
    color: "#000",
  },
  currentUserText: {
    color: "#fff",
  },
});
export default chatbox;