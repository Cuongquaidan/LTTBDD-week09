import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                paddingVertical: 40,
                gap: 30,
                alignItems: "center",
            }}
        >
            <Text
                style={{ fontSize: 16, fontWeight: 700, textAlign: "center" }}
            >
                A premium online store for sporter and their stylish choice
            </Text>
            <View
                style={{
                    padding: 10,
                    backgroundColor: "#E941411A",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                }}
            >
                <Image
                    source={require("./assets/bifour_-removebg-preview.png")}
                    style={{ marginTop: 40, objectFit: "cover" }}
                />
            </View>
            <Text
                style={{ fontSize: 25, fontWeight: 700, textAlign: "center" }}
            >
                POWER BIKE {"\n"} SHOP
            </Text>
            <Pressable
                style={styles.buttonCus}
                onPress={() => {
                    navigation.navigate("Shop");
                }}
            >
                GET STARTED
            </Pressable>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    buttonCus: {
        backgroundColor: "#E94141",
        flex: 1,
        color: "white",
        padding: 10,
        borderRadius: 10,
        fontWeight: 600,
        width: 200,
        textAlign: "center",
    },
});
