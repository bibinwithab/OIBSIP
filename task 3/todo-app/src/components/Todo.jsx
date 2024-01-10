/* eslint-disable react/prop-types */
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-cyan-600  text-black py-3 px-4 rounded-md mb-1 cursor-pointer hover:bg-cyan-800 ">
      <p className="font-primary ">{task.task}</p>
      <div className="flex item-center gap-x-4">
        <AiFillEdit className="text-xl" onClick={()=>{
            editTodo(task.id);
        }}/>
        <BsFillTrashFill
          className="text-xl"
          onClick={() => {
            deleteTodo(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
