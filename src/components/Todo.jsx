import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Form.css";
import Footer from "./Footer";

export default function Todo() {
  //inorder to save todo item, we need to create a state variable

  //const [todoItem, setToDoItem] = useState(""); this is commented out inorder to set a new todo for us to mark the task as completed

  //This is to achieve a task of completed
  const [todoItem, setToDoItem] = useState({ name: "", done: false });

  //creating a state variable to store todo item
  const [saveTodoItem, setSaveTodoItem] = useState([]);

  const completedTodos = saveTodoItem.filter(
    (saveTodo) => saveTodo.done
  ).length;
  const totalTodo = saveTodoItem.length;
  //to prevent the page from reloading or refreshing when data is added, we include onsubmit
  //to the form and create a function to handle the onsubmit.

  function handleSubmit(e) {
    e.preventDefault();
    //take the todoitem and set it to the list of saveTodoItem and log the output
    // setSaveTodoItem([todoItem]); //if u dont use the spread operator inline with the
    //saveTodoItem, it will not retain the previous values added.

    setSaveTodoItem([...saveTodoItem, todoItem]);

    //inorder to clear the iput after addind and item and the button is clicked
    setToDoItem({ name: "", done: false });
  }
  const sortedTodo = saveTodoItem
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div>
      {/* We need to create a form inside of this component that will accept users input */}
      <form onSubmit={handleSubmit} className="todoForm">
        <div className="container">
          <input
            onChange={(e) => setToDoItem({ name: e.target.value, done: false })} //this object name and done is added here
            value={todoItem.name}
            type="text"
            className="inputBox"
            placeholder="Add a task..."
            required
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
      {/* to display the items */}
      <div className="todoItem">
        {sortedTodo.map((item) => (
          //<h3 key={item}>{item}</h3>//we can do this inform of component
          //so the it will render the items in coponent
          <TodoItem
            key={item.name}
            item={item}
            todoItem={todoItem}
            saveTodoItem={saveTodoItem}
            setSaveTodoItem={setSaveTodoItem}
          />
        ))}
      </div>
      <Footer completedTodos={completedTodos} totalTodo={totalTodo} />
    </div>
  );
}
