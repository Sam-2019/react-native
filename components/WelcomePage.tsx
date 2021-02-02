import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Image,
    FlatList,
} from "react-native";

export interface Props {
    count?: number;
}

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: "Devin" },
                    { key: "Dan" },
                    { key: "Dominic" },
                    { key: "Jackson" },
                    { key: "James" },
                    { key: "Joel" },
                    { key: "John" },
                    { key: "Jillian" },
                    { key: "Jimmy" },
                    { key: "Julie" },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key} </Text>}
            />
        </View>
    );
};

const WelcomePage: React.FC<Props> = (props) => {
    const [count, setCount] = React.useState(props.count);
    const [text, setText] = React.useState("");

    const logo = {
        url: "../assets/icon.png",
        width: 64,
        height: 50,
    };

    const Increment = () => {
        setCount((count || 0) + 1);
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={logo} />

                <Text>You clicked {count} times!</Text>
                <Text>{text}</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate"
                    onChangeText={(text) => setText(text)}
                    defaultValue={text}
                />
                <Button onPress={Increment} title="Click Me" />

                <FlatListBasics />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        backgroundColor: "#fff",
        border: " 1px solid transparent",
        height: 40,
    },

    button: {
        backgroundColor: "#fff",
        height: 40,
    },
});

export default WelcomePage;
