import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const FlaggedPosts = () => {
  const [flaggedPosts, setFlaggedPosts] = useState([]);

  useEffect(() => {
    // Fetch flagged posts data from API or local data source
    // For example:
    // const fetchData = async () => {
    //   const response = await fetch('API_ENDPOINT');
    //   const data = await response.json();
    //   setFlaggedPosts(data);
    // };
    // fetchData();

    // Mock data for demonstration
    const mockFlaggedPosts = [
      { id: 1, title: "Flagged Post 1", content: "Content of flagged post 1" },
      { id: 2, title: "Flagged Post 2", content: "Content of flagged post 2" },
      { id: 3, title: "Flagged Post 3", content: "Content of flagged post 3" }
    ];
    setFlaggedPosts(mockFlaggedPosts);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {flaggedPosts.map(post => (
          <TouchableOpacity key={post.id} style={styles.blogContainer}>
            <View style={styles.profileContainer}>
              <Image source={require('path/to/profilePic.png')} style={styles.profilePic} />
              <Text style={styles.profileName}>Username</Text>
            </View>
            <Text style={styles.blogText}>{post.content}</Text>
            {/* You can add more components like images, buttons, etc. */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#ff6347' }]}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#32cd32' }]}>
                <Text style={styles.buttonText}>Restore</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
  blogContainer: {
    marginBottom: 20,
  },
  blogText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  likeCount: {
    textAlign: "center",
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  starIcon: {
    fontSize: 20,
  },
});

export default FlaggedPosts;
