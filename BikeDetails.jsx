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
import React from "react";

const BikeDetails = ({ navigation, route }) => {
    const bike = route.params.bike;
    return (
        <View style={{ padding: 20 }}>
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
                    source={bike.image}
                    style={{ marginTop: 40, objectFit: "cover" }}
                />
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontWeight: 700, fontSize: 30 }}>
                    {bike.name}
                </Text>
                <Text style={{ color: "gray" }}>
                    {bike.discount}$ OF {bike.price}${" "}
                    <Text
                        style={{
                            marginLeft: 30,
                            textDecorationLine: "line-through",
                        }}
                    >
                        {bike.price * (bike.discount / 100)}$
                    </Text>
                </Text>
            </View>
            <View>
                <Text
                    style={{ paddingVertical: 20, text: 26, fontWeight: 700 }}
                >
                    Description
                </Text>
                <Text>{bike.desc}</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                    marginTop: 30,
                    paddingHorizontal: 30,
                }}
            >
                <Image source={require("./assets/tim.png")} />
                <Pressable style={styles.buttonCus}>Add to cart</Pressable>
            </View>
        </View>
    );
};

export default BikeDetails;

const styles = StyleSheet.create({
    buttonCus: {
        backgroundColor: "#E94141",
        color: "white",
        padding: 10,
        borderRadius: 10,
        fontWeight: 600,
        flex: 1,
        textAlign: "center",
    },
});
