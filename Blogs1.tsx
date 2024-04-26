import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Blogs1=()=>{
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [relevantBlogs, setRelevantBlogs] = useState([ // State for relevant blogs
        "10 Tips for Better Blogging",
        "How to Monetize Your Blog",
        "SEO Strategies for Bloggers",
        "The Art of Storytelling in Blogging",
        // Add more blog titles as needed
    ]);
    const [allBlogs, setAllBlogs] = useState(relevantBlogs); // State to hold all blogs

    const handleSearch = () => {
        // Filter relevant blogs based on the search query
        const filteredBlogs = allBlogs.filter(blogTitle =>
            blogTitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // Update the state with the filtered blogs
        setRelevantBlogs(filteredBlogs);
    };

    const handleAddImage = () => {
        // Implement functionality for add image button
        console.log("Add Image button clicked!");
    };

    const handleAddAudioVideo = () => {
        // Implement functionality for add audio/video button
        console.log("Add Audio/Video button clicked!");
    };

    const handleAddBlog = () => {
        // Implement functionality for add blog button
        console.log("Add Blog button clicked!");
    };

    const handleSeeMoreBlogs = () => {
        // Implement functionality for see more blogs button
        console.log("See more blogs button clicked!");
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search your favourite blogs"
                    value={searchQuery}
                    onChangeText={(text) => {
                        setSearchQuery(text);
                        if (text === "") {
                            // Reset to all blogs when search query is empty
                            setRelevantBlogs(allBlogs);
                        }
                    }}
                />
                <Button title="Search" onPress={handleSearch} />
            </View>

            {/* Relevant Blogs Section */}
            <Text style={styles.heading}>Relevant Blogs</Text>

            {/* Display each blog title */}
            {relevantBlogs.map((blogTitle, index) => (
                <TouchableOpacity key={index} style={styles.blogCard}>
                    <Text>{blogTitle}</Text>
                </TouchableOpacity>
            ))}

            {/* "See more blogs" button */}
            <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMoreBlogs}>
                <Text>See more blogs</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: "center",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    blogCard: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      width: '100%', // Make the blog card occupy the full width
  },
    seeMoreButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});
export default Blogs1;