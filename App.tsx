 
 import React, { useState } from 'react';
 import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
 
 const formatDate = (dateStr) => {
   const now = new Date();
   const date = new Date(dateStr);
   const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
 
   if (date < oneWeekAgo) {
     // If the notification is older than one week, display the date
     return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   } else {
     // Otherwise, calculate the difference in days and display accordingly
     const diffTime = Math.abs(now - date);
     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
     if (diffDays < 1) {
       return 'Today';
     } else if (diffDays === 1) {
       return 'Yesterday';
     } else {
       return `${diffDays} days ago`;
     }
   }
 };
 
 export default function App() {
   const [seenNotifications, setSeenNotifications] = useState([]);
 
   const notifications = [
     {
       id: 1,
       title: 'Appointment Reminder',
       message: 'Your appointment with Dr. Smith is scheduled for tomorrow at 10:00 AM.',
       date: '2023-04-25T14:00:00Z'
     },
     {
       id: 2,
       title: 'New Prescription',
       message: 'A new prescription for medication XYZ has been added to your account.',
       date: '2023-04-20T09:00:00Z'
     },
     {
       id: 3,
       title: 'Lab Results Available',
       message: 'Your recent lab test results are now available for review.',
       date: '2023-03-15T12:00:00Z'
     },
   ];
 
   const markAsSeen = (id) => {
     if (!seenNotifications.includes(id)) {
       setSeenNotifications(current => [...current, id]);
     }
   };
 
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.headerText}>Notifications</Text>
       {notifications.map((notification) => (
         <View
           key={notification.id}
           style={[
             styles.infoCard,
             { backgroundColor: seenNotifications.includes(notification.id) ? '#ffffff' : '#007BFF' }
           ]}
         >
           <Text style={[styles.infoTitle, { color: seenNotifications.includes(notification.id) ? '#007BFF' : '#ffffff' }]}>{notification.title}</Text>
           <Text style={[styles.infoText, { color: seenNotifications.includes(notification.id) ? '#007BFF' : '#ffffff' }]}>{notification.message}</Text>
           <Text style={[styles.detailText, { color: seenNotifications.includes(notification.id) ? '#666' : '#ddd' }]}>{formatDate(notification.date)}</Text>
           <TouchableOpacity
             style={[styles.seenButton, { backgroundColor: seenNotifications.includes(notification.id) ? '#007BFF' : '#ffffff' }]}
             onPress={() => markAsSeen(notification.id)}
           >
             <Text style={[styles.seenButtonText, { color: seenNotifications.includes(notification.id) ? '#ffffff' : '#007BFF' }]}>Seen</Text>
           </TouchableOpacity>
         </View>
       ))}
     </ScrollView>
   );
 };
 
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
   infoCard: {
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
     marginBottom: 5
   },
   infoText: {
     fontSize: 14,
     marginBottom: 3
   },
   detailText: {
     fontSize: 14,
     marginBottom: 10
   },
   seenButton: {
     position: 'absolute',
     bottom: 10,
     right: 10,
     padding: 8,
     borderRadius: 5,
   },
   seenButtonText: {
     fontWeight: 'bold',
   },
 });
 