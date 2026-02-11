import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaPen } from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [dark, setDark] = useState(false);

  // ======== function add task ============
  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  // ======== function delete task ============
  const deleteTask = (indexToDelete) => {
    const updateList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updateList);
  };

  return (
    <div className={`transition-all duration-500 ${dark ? "bg-slate-50" : "bg-slate-900"} h-screen w-full pt-10`}>
      <div
        className={`transition-all duration-500 ${
          dark 
          ? "bg-white text-slate-800 border-orange-200 shadow-xl" 
          : "bg-slate-800 text-slate-100 border-orange-500/20 shadow-2xl"
        } rounded-2xl border-2 p-7 w-11/12 max-w-md mx-auto flex flex-col `}
      >
        <div className="flex justify-between items-center mb-6">
          {/* logo */}
          <div className="flex items-center gap-2">
            <FcTodoList className="text-3xl" />
            <h1 className={`font-bold text-2xl ${dark ? "text-slate-700" : "text-white"}`}>
              Your ToDo
            </h1>
          </div>
          <div onClick={() => setDark(!dark)} className="cursor-pointer p-2 rounded-full hover:bg-orange-500/10 transition-colors">
            {dark ? <MdDarkMode className="text-2xl text-slate-600" /> : <MdOutlineLightMode className="text-2xl text-orange-400" />}
          </div>
        </div>

        {/*------------- text field ---------------- */}
        <div className={`flex items-center ${dark ? "bg-slate-100" : "bg-slate-700"} h-12 mt-2 rounded-xl overflow-hidden border border-transparent focus-within:border-orange-500 transition-all`}>
          <input
            type="text"
            value={task}
            placeholder="Add your task..."
            onChange={(e) => setTask(e.target.value)}
            className={`bg-transparent outline-none py-1.5 flex-1 px-4 ${dark ? "text-slate-900" : "text-white"} placeholder:text-slate-500`}
          />
          <button
            disabled={!task.trim()}
            onClick={addTask}
            className={`h-full px-6 font-bold transition-all ${
              task.trim() 
              ? "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer" 
              : dark ? "bg-slate-300 text-slate-500 cursor-not-allowed" : "bg-slate-600 text-slate-400 cursor-not-allowed"
            }`}
          >
            ADD
          </button>
        </div>

        {/*------------- task list ---------------- */}
        <div className="mt-8 space-y-3 max-h-78.75  custom-scrollbar overflow-y-auto ">
          {todoList.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg border-l-4 border-orange-500 transition-all ${
                dark ? "bg-slate-50 text-slate-700 shadow-sm" : "bg-slate-700/40 text-slate-200"
              }`}
            >
              <span className="flex-1 truncate pr-4 font-medium">{item}</span>
              <div className="flex gap-3 items-center">
                <FaPen className="cursor-pointer text-sky-500 hover:text-sky-400 transition-colors text-sm" />
                <MdDelete 
                  className="cursor-pointer text-rose-500 hover:text-rose-400 transition-colors text-xl" 
                  onClick={() => deleteTask(index)} 
                />
              </div>
            </div>
          ))}
          
          {todoList.length === 0 && (
            <p className="text-center text-slate-500 mt-10 italic text-sm">Your list is empty...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;