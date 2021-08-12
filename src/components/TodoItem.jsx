const TodoItem = ({ id, text, completed, toggleComplete, removeTodo }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => toggleComplete(id)} />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
