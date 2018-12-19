import React, {Component, Fragment} from 'react';
import TodoList from "./TodoList";
import TodoSearchForm from "./TodoSearchForm";

export default class TodoContainer extends Component{
  constructor(props){
    super(props);
    this.todoStore = props.stores.todoStore;
    this.query = null;
    this.state = {
      todos: []
    };
  }

  componentDidMount(){
    this.todoStore.onChange(this.reload);
    this.todoStore.fetch();
  }

  reload(){
    const todos = this.todoStore.getBy(this.query);
    this.setState({ todos });
  }

  search(query){
    this.query = query;
    this.reload();
  }

  render() {
    return <Fragment>
      <TodoSearchForm onSearch={this.search} />
      <TodoList todos={this.state.todos} />
    </Fragment>;
  }
}