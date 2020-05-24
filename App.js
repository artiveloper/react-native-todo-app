import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    AsyncStorage,
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

    componentDidMount() {
        AsyncStorage.getItem('@todos:state')
            .then((state) => {
                this.setState(JSON.parse(state))
            })
    }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    addTodo = (title) => {
        this.setState({
            todos: this.state.todos.concat({
                title: title,
                done: false,
            }),
            showModal: false
        })
        this.save()
    }

    removeTodo = (index) => {
        this.setState({
            todos: this.state.todos.filter((_, i) => i !== index)
        })
        this.save()
    }

    toggle = (index) => {
        const newTodos = [...this.state.todos]
        newTodos[index].done = !newTodos[index].done
        this.setState({todos: newTodos})
        this.save()
    }

    save = () => {
        AsyncStorage.setItem('@todos:state', JSON.stringify(this.state));
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header
                    showModal={this.showModal}
                />
                <FlatList
                    data={this.state.todos}
                    renderItem={({item, index}) => {
                        return (
                            <TodoItem
                                title={item.title}
                                done={item.done}
                                remove={() => this.removeTodo(index)}
                                toggle={() => this.toggle(index)}
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
