import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const doctorprofile=()=> {
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
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Education</Text>
        <Text style={styles.infoText}>2003 - Harvard Medical School, M.D. Degree</Text>
        <Text style={styles.infoText}>1999 - University of California, B.Sc. in Biological Sciences</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Experience</Text>
        <Text style={styles.infoText}>2018-2023 - Chief Cardiologist at Boston General Hospital</Text>
        <Text style={styles.infoText}>2010-2018 - Senior Cardiologist at Chicago Med</Text>
        <Text style={styles.infoText}>2005-2010 - Resident Cardiologist at New York Health Clinic</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  specialtyText: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 5
  },
  detailText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 3
  },
  infoCard: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 3
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
export default doctorprofile;