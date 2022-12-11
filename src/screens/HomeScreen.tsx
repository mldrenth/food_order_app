import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { connect } from "react-redux";
import { onAvailability, UserState, ApplicationState, ShoppingState } from "../redux";

interface HomeProps {
    userReducer: any,
    shoppingReducer: any
    onAvailability: Function
}

const _HomeScreen: React.FC<HomeProps> = (props) => {

    const { location } = props.userReducer;
    const { availability } = props.shoppingReducer

    const { categories, foods, restaurants } = availability

    console.log(foods)

    useEffect(() => {
        props.onAvailability(location.postalCode)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.navigation} ><Text>{`${location.name}, ${location.postalCode}, ${location.city}`}</Text><Text>Edit</Text></View>
            <View style={{ flex: 8, backgroundColor: 'green' }}><Text>Search Bar</Text></View>
            <View style={styles.body}><Text>Home Screen</Text></View>
            <View style={styles.footer}><Text>Footer</Text></View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1)'
    },
    navigation: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    }
})

const mapToStateProps = (state: ApplicationState) => ({
    userReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }