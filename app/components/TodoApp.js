var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var AddTodo=require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch=require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

    getInitialState:function(){

        return{
            showCompleted:false,
            SearchText:'',
            todos:TodoAPI.getTodos()
        }
    },
    componentDidUpdate:function(){
        TodoAPI.setTodos(this.state.todos)
    },
    handleAddTodos:function(text) {
        this.setState({
            todod:[
                ...this.state.todos,
                {
                    id:uuid(),
                    text:text,
                    completed:false,
                    createdAt:moment().unix(),
                    completedAt:undefined

                }
            ]
        })
        
    },
    handleToggle:function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todod.completed = !todo.completed;
                todo.completedAt = todo.completedAt?moment().unix():undefined;

            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    },
    handelSearch:function(showCompleted,SearchText){
        this.setState({
            showCompleted:showCompleted,
            SearchText:SearchText.toLowerCase()
        })

    },
    render:function(){
        var {todos,showCompleted,SearchText} = this.setState;

        var filteredTodos = TodoAPI.filteredTodos(todos,showCompleted,SearchText);
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 learge-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodo onAddTodo={this.handleAddTodos}/>
                        </div>

                    </div>
                </div>

            </div>
        )
    }


})

module.exports = TodoApp;
