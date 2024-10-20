import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from "react-native";
import React, { useState, useCallback, useReducer, useMemo } from "react";
import useGetFetchData from "./hooks/useGetFetchData";

const xe = {
    xe4: require("./assets/bifour_-removebg-preview.png"),
    xe1: require("./assets/bione-removebg-preview.png"),
    xe2: require("./assets/bitwo-removebg-preview.png"),
    xe3: require("./assets/bithree_removebg-preview.png"),
};

const initialState = { category: "All" };
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CATEGORY": {
            return { ...state, category: action.payload };
        }
        default:
            return state;
    }
};

const Shop = ({ navigation }) => {
    const { data } = useGetFetchData(
        "https://6710cfdca85f4164ef2f6c45.mockapi.io/api/bikes"
    );
    // const [category, setCategory] = useState("All");
    const [state, dispatch] = useReducer(reducer, initialState);
    const filteredData = useMemo(() => {
        return state.category === "All"
            ? data
            : data.filter((item) => item.category === state.category);
    }, [data, state.category]);

    // const handleCLick = (data) => {
    //   navigation.navigate("BikeDetails", { bike: data });
    // }

    const handleClick = useCallback(
        (item) => {
            navigation.navigate("BikeDetails", { bike: item });
        },
        [navigation]
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
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
                        style={styles.category}
                        onPress={() =>
                            dispatch({ type: "SET_CATEGORY", payload: "All" })
                        }
                    >
                        <Text
                            style={
                                state.category === "All" ? { color: "red" } : {}
                            }
                        >
                            All
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.category}
                        onPress={() =>
                            dispatch({
                                type: "SET_CATEGORY",
                                payload: "Mountain",
                            })
                        }
                    >
                        <Text
                            style={
                                state.category === "Mountain"
                                    ? { color: "red" }
                                    : {}
                            }
                        >
                            Mountain
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.category}
                        onPress={() =>
                            dispatch({
                                type: "SET_CATEGORY",
                                payload: "Roadbike",
                            })
                        }
                    >
                        <Text
                            style={
                                state.category === "Roadbike"
                                    ? { color: "red" }
                                    : {}
                            }
                        >
                            Roadbike
                        </Text>
                    </Pressable>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        height: 100,
                    }}
                >
                    {filteredData?.map((item) => (
                        <Pressable
                            key={item.id}
                            onPress={() => handleClick(item)}
                            style={{
                                alignItems: "center",
                                position: "relative",
                                height: 280,
                                width: "49%",
                                padding: 10,
                            }}
                        >
                            <Image
                                source={xe[item.image]}
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
                    ))}
                </View>
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
        textAlign: "center",
    },
});
