import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
    FlatList,
    SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
const data = [
    {
        id: 1,
        image: require("./assets/bifour_-removebg-preview.png"),
        name: "Penarello",
        desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
        category: "Mountain",
        price: 1800,
        discount: 10,
    },
    {
        id: 2,
        image: require("./assets/bione-removebg-preview.png"),
        name: "Pina Mountain",
        desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
        category: "Mountain",
        price: 1700,
        discount: 10,
    },
    {
        id: 3,
        image: require("./assets/bithree_removebg-preview.png"),
        name: "Pina Bike",
        desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
        category: "Roadbike",
        price: 1500,
        discount: 15,
    },
    {
        id: 4,
        image: require("./assets/bitwo-removebg-preview.png"),
        name: "Penarello",
        desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
        category: "Roadbike",
        price: 1900,
        discount: 10,
    },
    {
        id: 5,
        image: require("./assets/bifour_-removebg-preview.png"),
        name: "Pina Bike",
        desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
        category: "Roadbike",
        price: 1500,
        discount: 15,
    },
    {
        id: 6,
        image: require("./assets/bione-removebg-preview.png"),
        name: "Penarello",
        desc: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
        category: "Mountain",
        price: 2900,
        discount: 20,
    },
];
const Shop = ({ navigation }) => {
    const [category, setCategory] = useState("All");
    const filteredData =
        category === "All"
            ? data
            : data.filter((item) => item.category === category);
    const handleCLick = (data) => {
        navigation.navigate("BikeDetails", { bike: data });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "700", color: "red" }}>
                    The world's Best Bike
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 20,
                        marginTop: 20,
                        marginBottom: 30,
                    }}
                >
                    <Pressable
                        style={{ ...styles.category }}
                        onPress={() => setCategory("All")}
                    >
                        <Text
                            style={category === "All" ? { color: "red" } : ""}
                        >
                            All
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.category}
                        onPress={() => setCategory("Mountain")}
                    >
                        <Text
                            style={
                                category === "Mountain" ? { color: "red" } : ""
                            }
                        >
                            Mountain
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.category}
                        onPress={() => setCategory("Roadbike")}
                    >
                        {" "}
                        <Text
                            style={
                                category === "Roadbike" ? { color: "red" } : ""
                            }
                        >
                            Roadbike
                        </Text>
                    </Pressable>
                </View>

                <FlatList
                    data={filteredData}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    columnWrapperStyle={{ marginBottom: 10 }}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => handleCLick(item)}
                            style={{
                                alignItems: "center",
                                height: 180,
                                position: "relative",
                                width: "49%",
                                padding: 10,
                            }}
                        >
                            <Image
                                source={item.image}
                                style={{ width: "100%", height: "80%" }}
                                resizeMode="contain"
                            />
                            <Image
                                source={require("./assets/heart.png")}
                                style={{
                                    position: "absolute",
                                    top: 5,
                                    left: 5,
                                }}
                            />
                            <Text>{item.name}</Text>
                            <Text>${item.price}</Text>
                        </Pressable>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Shop;

const styles = StyleSheet.create({
    category: {
        width: 80,
        padding: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E9414187",
        color: "gray",
        textAlign: "center",
    },
});
