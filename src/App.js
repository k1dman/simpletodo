import React from 'react';
import TodoList from './todo/todolist'
import Context from './context'
import AddTodo from './todo/addtodo'


function App() {
  const [todos, setTodos] = React.useState([])

  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if (todo.id ===id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false

    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Мой список дел</h1>
        {/* <Modal /> */}
        <AddTodo onCreate={addTodo}/>

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>Здесь пока пусто</p>}
        </div>
    </Context.Provider>
  );
}

export default App
