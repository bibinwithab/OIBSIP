import { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todoValue.filter((todo) => todo.id !== id);
    setTodo(updatedTodo);
  };

  const editTodo = (id) => {
    const updatedTodo = todoValue.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodo(updatedTodo);
  };

    const editTask = (value, id) => {
        const updatedTodo = todoValue.map((todo) =>
            todo.id === id ? { ...todo, task: value, isEditing: !todo.isEditing } : todo
        );
        setTodo(updatedTodo);
    }

  return (
    <div className="container bg-black w-1/2  m-20 p-8 rounded-md">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, index) => (
        todo.isEditing?(
            <Edit key={index} editTodo={editTask} task={todo}/>
        ):(
        <Todo
          key={index}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />)
      ))} 
    </div>
  );
};

export default TodoList;
