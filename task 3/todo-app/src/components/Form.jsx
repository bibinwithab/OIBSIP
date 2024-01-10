import { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTodo(value);
    setValue("");
  };

  return (
    <form className=" flex items-center justify-center mb-2 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-green-500 p-3 w-1/2  text-white  rounded placeholder:text-gray-300"
        placeholder="Enter Your Task..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="bg-green-600 hover:bg-green-800 border-none p-4 text-black cursor-pointer rounded ml-2">
      <BsBookmarkFill />
      </button>
    </form>
  );
};

export default Form;
