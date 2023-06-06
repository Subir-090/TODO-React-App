import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);

  function addItem(itemContent) {
    setItems(
      (items) => {
        return [
          ...items,
          {
            'body': itemContent,
            'completed': false,
            'id': id
          }
        ];
      }
      );

      setId((id) => id + 1);
  } 

  function updateItem(itemId) {
    const itemIndex = items.findIndex((item) => item.id == itemId);
    const newItems = [...items];
    newItems[itemIndex].completed = !newItems[itemIndex].completed;
    setItems(items => newItems);
  }

  function upItem(itemId) {
    const itemIndex = items.findIndex((item) => item.id == itemId);
    if (itemIndex === 0) return;
    const newItems = [...items];
    const item1 = newItems[itemIndex], item2 = newItems[itemIndex - 1];
    newItems[itemIndex] = item2;
    newItems[itemIndex - 1] = item1;
    setItems((items) => newItems);
  }

  function downItem(itemId) {
    const itemIndex = items.findIndex((item) => item.id == itemId);
    if (itemIndex === items.length - 1) return;
    const newItems = [...items];
    const item1 = newItems[itemIndex], item2 = newItems[itemIndex + 1];
    newItems[itemIndex] = item2;
    newItems[itemIndex + 1] = item1;
    setItems((items) => newItems);
  }

  function deleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id != itemId));
  }
    
  return (
    <>
        <h1 className="App">TODO LIST</h1>
        <Form addItem={addItem} />
        <List items={items} updateItem={updateItem} upItem={upItem} downItem={downItem} deleteItem={deleteItem}/>
    </>
  );
}

export default App;
