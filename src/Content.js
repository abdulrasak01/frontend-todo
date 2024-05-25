import React from "react";

const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <main className=" my-40 text-center">
      {items.length ? (
        <ul className="w-9/12 mx-auto">
          {items.map((item) => (
            <li
              className="flex justify-between bg-gray-300 m-3 p-3"
              key={item.id}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <button onClick={() => handleDelete(item.id)}>
                <span className="bg-red-500 border border-white p-2">Delete</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-bold">Your list is Empty</p>
      )}{" "}
    </main>
  );
};

export default Content;
