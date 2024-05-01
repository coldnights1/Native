import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const appointment=()=> {
  // Dummy data for doctors
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Neurologist',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Dr. William Johnson',
      specialty: 'Pediatrician',
      imageUrl: 'https://via.placeholder.com/150'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Doctors List</Text>
      {doctors.map((doctor) => (
        <View key={doctor.id} style={styles.card}>
          <Image
            source={{ uri: doctor.imageUrl }}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.specialty}>{doctor.specialty}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Appointment Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
  card: {
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  specialty: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,  // Added margin between buttons
  },
  buttonText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
export default appointment;