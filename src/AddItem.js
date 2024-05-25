import React from "react";
import Search from "./Search";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit ,search,setSearch}) => {
  const inputRef = useRef()
  return (
    <div className="flex justify-between w-9/12 mx-auto">
      
    <div>
      <Search 
      search ={search}
      setSearch ={setSearch}
      />
    </div>
    <div>
    <form onSubmit={handleSubmit}>
      <div className="flex my-5 ">
        <div className="">
          <label htmlFor="addItem" className="p-2 font-bold text-2xl ">
            Add Item:
          </label>
          <input
            autoFocus
            ref = {inputRef}
            type="text"
            id="AddItem"
            placeholder="Add Your Items"
            required
            className="border border-gray-400 rounded-full px-2"
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}

          />
        </div>
        <div>
          <button type="submit" aria-label="AddItem" className="mt-1 mx-2" onClick={()=>inputRef.current.focus()}>
          <span className="w-5 h-5 font-bold">+</span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg> */}
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
};

export default AddItem;
