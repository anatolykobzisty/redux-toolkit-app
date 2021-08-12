import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} toggleComplete={toggleComplete} removeTodo={removeTodo} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
