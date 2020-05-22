import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import {
    Header,
    TodoItem,
    TaskModal,
} from 'components';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <TodoItem title="클래스101 커리큘럼 만들기" done={true}/>
            <TodoItem title="운전면허 도로주행 연수" done={false}/>
            <TaskModal isVisible={false}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
