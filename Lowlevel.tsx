import React, { Fragment, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFlag, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const LowLevel = () => {
  const [answers, setAnswers] = useState([
    {
      text: "Depression is a lifelong condition, as there is no cure. However, this does not necessarily mean that it will affect a person every day of their life. With the right treatment plan, remission is possible. The treatment plan may need adjusting throughout a person's life",
      likes: 0,
      likedByUser: false,
      answeredBy: "User1",
      timestamp: "March 16, 2024, 10:30 AM",
    },
    {
      text: "These mood disorders include mood swings that range from highs (mania) to lows (depression). It's sometimes difficult to distinguish between bipolar disorder and depression.",
      likes: 0,
      likedByUser: false,
      answeredBy: "User2",
      timestamp: "March 16, 2024, 11:00 AM",
    },
    {
      text: "This mood disorder in children includes chronic and severe irritability and anger with frequent extreme temper outbursts. This disorder typically develops into depressive disorder or anxiety disorder during the teen years or adulthood.",
      likes: 0,
      likedByUser: false,
      answeredBy: "User3",
      timestamp: "March 16, 2024, 11:30 AM",
    },
    // Add more answers as needed
  ]);

  const [flagged, setFlagged] = useState(false);

  const questionUser = {
    name: "John Doe",
    profilePic: "https://via.placeholder.com/150", // Replace with actual profile picture URL
  };

  const questionTimestamp = "March 16, 2024, 10:00 AM";

  const handleFlagClick = () => {
    setFlagged(!flagged);
  };

  return (
    <Fragment>
      <View style={styles.container}>
        {/* Question Section */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Question:</Text>
          <Text style={styles.questionText}>When a cure for Chronic depression would be found?</Text>
        </View>

        {/* User Info Section */}
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: questionUser.profilePic }}
              style={styles.userProfilePic}
            />
            <Text style={styles.userName}>{questionUser.name}</Text>
          </View>
          <Text style={styles.postedOnText}>Posted on: {questionTimestamp}</Text>
        </View>

        {/* Answers Section */}
        <View style={styles.answersContainer}>
          <Text style={styles.answersHeaderText}>Answers:</Text>
          <ScrollView style={styles.answersScrollView}>
            {answers.map((answer, index) => (
              <View key={index} style={styles.answerCard}>
                <Text style={styles.answerText}>{answer.text}</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={styles.flagButton}
                    onPress={handleFlagClick}
                  >
                    <FontAwesomeIcon icon={faFlag} style={styles.icon} />
                    <Text style={styles.buttonText}>Flag the Blog</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.upvoteButton}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} style={styles.icon} />
                    <Text style={[styles.buttonText, { color: answer.likedByUser ? 'green' : 'black' }]}>Upvote</Text>
                  </TouchableOpacity>
                  <Text style={styles.upvotesText}>Upvotes: {answer.likes}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postedOnText: {
    fontSize: 12,
    color: '#777',
  },
  answersContainer: {
    marginBottom: 20,
  },
  answersHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answersScrollView: {
    marginBottom: 10,
  },
  answerCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  upvoteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  upvotesText: {
    fontSize: 14,
  },
});

export default LowLevel;
