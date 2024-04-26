import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const ProfileInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: "https://i.pravatar.cc/150?u=1" }} style={styles.profilePic} />
      <Text style={styles.profileName}>John Doe</Text>
    </View>
  );
};

const StarRating = ({ rating, onRate }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRate = (value) => {
    setSelectedRating(value);
    onRate(value);
  };

  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((value) => (
        <TouchableOpacity key={value} onPress={() => handleRate(value)}>
          <Text style={[styles.starIcon, { color: value <= selectedRating ? "#FFD700" : "#ccc" }]}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
 const blogs2=()=> {
  const [likes, setLikes] = useState(0);
  const [likeActive, setLikeActive] = useState(true);
  const [userRating, setUserRating] = useState(0);

  const handleLike = () => {
    if (likeActive) {
      setLikes(likes + 1);
      setLikeActive(false);
    }
  };

  const handleDislike = () => {
    if (!likeActive) {
      setLikes(likes - 1);
      setLikeActive(true);
    }
  };

  const handleRate = (rating) => {
    setUserRating(rating);
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileInfo />
      <View style={styles.blogContainer}>
        <Text style={styles.blogText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nulla nec accumsan interdum, erat felis ultricies libero, sit amet bibendum odio urna nec justo. Pellentesque tincidunt, sapien a pellentesque fermentum, lectus felis fermentum lorem, quis ultricies ligula risus non velit. In eu eros leo. Sed sit amet gravida metus. Phasellus et dui eget orci rhoncus volutpat. Vestibulum euismod ante id felis tristique pharetra. Integer vel libero id urna consectetur condimentum in ut risus. Vivamus pellentesque lacus eget nisi varius, et sodales arcu commodo. Vivamus a rhoncus nunc, et condimentum eros.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLike} style={[styles.button, { backgroundColor: likeActive ? "#007bff" : "#ccc" }]}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDislike} style={[styles.button, { backgroundColor: likeActive ? "#ccc" : "#007bff" }]}>
          <Text style={styles.buttonText}>Dislike</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.likeCount}>Likes: {likes}</Text>
      <StarRating rating={userRating} onRate={handleRate} />
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
export default blogs2;