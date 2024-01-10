/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form
      className="flex items-center justify-center mb-2 font-primary w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none bg-transparent border border-amber-500 p-3 w-1/2  text-white  rounded placeholder:text-gray-300"
        placeholder="Update Task..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="bg-amber-600 hover:bg-amber-800 border-none p-4 text-black cursor-pointer rounded ml-2">
      <BsBookmarkCheckFill />
      </button>
    </form>
  );
};

export default Edit;
