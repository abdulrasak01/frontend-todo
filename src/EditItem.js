import React from 'react'
import { useRef } from "react";

const EditItem = ({items,updateData,setUpdateData,changeTask,cancelUpdate,updateTask}) => {
  // const itemss = items.find((item) => item.id === updateItem.id);
    const inputRef = useRef()
  return (

    <div className='relative'>
        <form className='absolute top-0 right-0 mr-0'>
      
     <div className="flex ">
       <div className="">
         <label htmlFor="addItem" className="p-2 font-bold text-2xl ">
           Update Item:
         </label>
         <input
          //  autoFocus
           ref = {inputRef}
           type="text"
           id="updateItem"
           placeholder="Update Your Items"
           className="border border-gray-400 rounded-full px-2"
           value={updateData &&updateData.item}
           onChange={(e)=>changeTask(e)}
 
         />
       </div>
       <div>
         <button type="submit" aria-label="AddItem" className="mt-1 mx-2" onClick={(e)=>updateTask(e)}>
         <span className="w-5 h-5 font-bold border rounded-2xl bg-green-500 p-2">Update</span>
         </button>
         <button type="cancel" aria-label="AddItem" className="mt-1 " onClick={(e)=>cancelUpdate(e)}>
         <span className="w-5 h-5 font-bold border rounded-2xl bg-red-500 p-2">Cancel</span>
         </button>
       </div>
     </div>
     
   </form>
      </div>
  )
}

export default EditItem