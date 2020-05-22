import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
} from 'react-native';
import {
    Header,
    TodoItem,
    TaskModal,
} from 'components';

export default class App extends React.Component {

    state = {
        todos: [
            {
                title: '클래스101 커리큘럼 만들기',
                done: true,
            },
            {
                title: '운전면허 도로주행 연수',
                done: false,
            },
            {
                title: '클래스101 리액트네이티브 강의 듣기',
                done: false,
            }
        ],
        showModal: false,
    }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    addTodo = (title) => {
        console.log('clkick,.,..', title)

        this.setState({
            todos: this.state.todos.concat({
                title: title,
                done: false,
            }),
            showModal: false
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header
                    showModal={this.showModal}
                />
                <FlatList
                    data={this.state.todos}
                    renderItem={({item}) => {
                        return (
                            <TodoItem
                                title={item.title}
                                done={item.done}
                            />
                        )
                    }}
                    keyExtractor={(_, index) => {
                        return `${index}`
                    }}
                />
                <TaskModal
                    isVisible={this.state.showModal}
                    hideModal={this.hideModal}
                    addTodo={this.addTodo}
                />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
