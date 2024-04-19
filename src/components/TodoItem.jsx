/* eslint-disable react/prop-types */
export default function TodoItem({ item, saveTodoItem, setSaveTodoItem }) {
  function handleDelete(item) {
    setSaveTodoItem(saveTodoItem.filter((todoItem) => todoItem !== item));
  }
  function handleClick(name) {
    // const newArray = saveTodoItem.map((saveTodo) =>
    //   saveTodo.name === name ? { ...saveTodo, done: !saveTodo.done } : saveTodo
    // );
    // setSaveTodoItem(newArray);
    setSaveTodoItem(
      saveTodoItem.map((saveTodo) =>
        saveTodo.name === name
          ? { ...saveTodo, done: !saveTodo.done }
          : saveTodo
      )
    );
  }
  const lineThrough = item.done ? "completed" : "";
  return (
    <div className="single-item">
      <div className="itemName">
        <span className={lineThrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className="delete-btn">
            x
          </button>
        </span>
      </div>

      <hr className="line" />
    </div>
  );
}
