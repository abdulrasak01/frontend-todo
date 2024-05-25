import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import axios from "axios";
// JSON.parse(localStorage.getItem("TodoList"))
function App() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/todos/");
        setItems(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.header);
        } else {
          console.log(err.message);
        }
      }
    };
    fetchItems();
  }, [items]);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  const addItem = async (item) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/todos/", {
        item: item,
        checked: false,
      });
      setItems(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.header);
      } else {
        console.log(err.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/detail/${id}`);
      const deleteList = items.filter((item) => item.id !== id);
      setItems(deleteList);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = async (id) => {
    const item = items.find((items) => items.id === id);
    const editItem = {
      item: item.item,
      checked: !item.checked,
    };
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/detail/${id}`,
        editItem
      );

      setItems(
        items.map((item) => (item.id === id ? { ...response.data } : item))
      );
    } catch (err) {
      console.log(`err${err.message}`);
    }
  };

  items = search
    ? items.filter((item) =>
        item.item.toLowerCase().includes(search.toLowerCase())
      )
    : items;

  return (
    <div>
      <Header />
      <AddItem
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
        newItem={newItem}
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items}
        // items = {items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
