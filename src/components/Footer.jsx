import "./Footer.css";
/* eslint-disable react/prop-types */
export default function Footer({ completedTodos, totalTodo }) {
  return (
    <div className="footer">
      <span className="item"> Completed Todo: {completedTodos}</span>
      <span className="item"> Total Todo: {totalTodo}</span>
    </div>
  );
}
