import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Header from 'components/Header';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
