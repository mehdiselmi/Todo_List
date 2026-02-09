import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { MdOutlineLightMode } from "react-icons/md";
const Todo = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [dark, setDark] = useState(false);
  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };
  return (
    <div className={` ${dark ? 'bg-white' :'bg-gray-700'} h-screen w-full pt-4`} >
    <div className={` ${dark ? 'bg-[#FFF5E6] text-black' :'bg-gray-800 text-white'}   rounded-xl border-2 border-orange-600 min-h-137.5  p-7 w-11/12 max-w-md place-self-center flex flex-col`}>
      <div className="flex justify-between items-center">
        {/* logo  */}
        <div className="flex items-center gap-2 ">
          <FcTodoList className="text-2xl" />
          <h1 className={`font-bold text-xl ${dark ? 'text-gray-700' :'text-white'}`}>Your ToDo </h1>
        </div>
        <div >
          <MdOutlineLightMode
            className="text-xl cursor-pointer"
            onClick={() => {
              setDark(!dark);
            }}
          />
        </div>
      </div>

      {/*------------- text feild ---------------- */}

      <div className=" flex items-center bg-gray-200 h-11 mt-5 rounded-md">
        <input
          type="text"
          value={task}
          placeholder="Add your task"
          onChange={(e) => setTask(e.target.value)}
          className="border-0 text-black border-gray-600 outline-none placeholder:text-slate-600   py-1.5 w-[99%]  px-3    "
        />
        <button
          onClick={addTask}
          className="cursor-pointer px-4 font-semibold bg-orange-400 h-11 hover:bg-orange-500"
        >
          add
        </button>
      </div>
      {/*------------- addd task ---------------- */}

      <div className="mt-4">
        {todoList.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item}
              className="border-2 border-amber-600 rounded-md w-full p-2 my-1.5 outline-none"
            />
          </div>
        ))}
      </div>

      {/*=============== dark mode ==================== */}
      
    </div></div>
  );
};

export default Todo;
