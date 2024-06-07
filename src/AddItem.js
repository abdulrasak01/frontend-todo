import React from "react";
import Search from "./Search";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit ,search,setSearch}) => {
  const inputRef = useRef()
  return (
    <div className="flex justify-between  mx-auto">
      
    <div>
      <Search 
      search ={search}
      setSearch ={setSearch}
      />
    </div>
    {/* <div> */}
    <form onSubmit={handleSubmit}>
      <div className="flex  m-5">
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
         <span className="w-5 h-5 font-bold border rounded-2xl bg-green-500 p-2">Add</span>
         </button>
        </div>
      </div>
    </form>
    </div>
    // </div>
  );
};

export default AddItem;
