import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import { addNewTodo, fetchTodos } from "./store/todoSlice";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={handleAction} />
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
