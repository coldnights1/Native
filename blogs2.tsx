import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DoctorProfile() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Doctor Profile</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>Dr. John Doe</Text>
          <Text style={styles.specialtyText}>Cardiologist</Text>
          <Text style={styles.detailText}>DOB: 01/01/1970</Text>
          <Text style={styles.detailText}>Age: 53</Text>
          <Text style={styles.detailText}>Gender: Male</Text>
          <Text style={styles.detailText}>Phone: +1234567890</Text>
          <Text style={styles.detailText}>Street1: 123 Heart Lane</Text>
          <Text style={styles.detailText}>Street2: Suite 200</Text>
          <Text style={styles.detailText}>City: Healthville</Text>
          <Text style={styles.detailText}>District: Cardio</Text>
          <Text style={styles.detailText}>State: Wellness</Text>
          <Text style={styles.detailText}>Registration No: REG123456</Text>
        </View>
      </View>
            </View>
      <View style={styles.educationCard}>
        <Text style={styles.educationTitle}>Education</Text>
        <View style={styles.educationDetails}>
          <Text style={styles.educationText}>2003 - Harvard Medical School</Text>
          <Text style={styles.educationText}>M.D. Degree</Text>
        </View>
        <View style={styles.educationDetails}>
          <Text style={styles.educationText}>1999 - University of California</Text>
          <Text style={styles.educationText}>B.Sc. in Biological Sciences</Text>
        </View>
      </View>
      <View style={styles.experienceCard}>
        <Text style={styles.experienceTitle}>Experience</Text>
        <View style={styles.experienceDetails}>
          <Text style={styles.experienceText}>2018-2023 - Chief Cardiologist at Boston General Hospital</Text>
        </View>
        <View style={styles.experienceDetails}>
          <Text style={styles.experienceText}>2010-2018 - Senior Cardiologist at Chicago Med</Text>
        </View>
        <View style={styles.experienceDetails}>
          <Text style={styles.experienceText}>2005-2010 - Resident Cardiologist at New York Health Clinic</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>More Info</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    alignItems: "center", // Added from new styles
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialtyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  // New styles integrated into the component
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
    backgroundColor: '#007BFF', // Example background color for buttons
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

