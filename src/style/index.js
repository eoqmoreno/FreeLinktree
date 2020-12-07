import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    navbar: {
        backgroundColor: "#FFE59D",
        alignItems: "center",
        padding: 20,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },

    title: {
        color: "#00354C",
        fontWeight: "bold",
        fontSize: 25,
    },

    foto: {
        borderRadius: 100,
        width: 150,
        height: 150,
    },

    links: {
        backgroundColor: "#00354C",
        margin: 10,
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
    },

    linkText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
    },

    body: {
        flex: 1,
    },
})

export { style }