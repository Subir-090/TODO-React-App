import { useState, useEffect } from "react";
import "./List.css";

export default function List({ items, updateItem, upItem, downItem, deleteItem }) {
  const [completedItems, setCompletedItems] = useState(0);

  useEffect(() => {
    setCompletedItems(
      (completedItems) => {
        return items.reduce(
          (total,item) => {
            return total + (item.completed ? 1 : 0);
          },0
        )
      }
    )
  },[items]); 

  function handleClickItem(event) {
    const contentElement = event.target;
    const parentElement = contentElement.parentElement;
    const elementId = parentElement.id;

    updateItem(elementId);
  }

  function handleClickUp(event) {
    const itemId = event.target.parentElement.id;
    
    upItem(itemId);
  }

  function handleClickDown(event) {
    const itemId = event.target.parentElement.id;
    downItem(itemId);
  }

  function handleClickDelete(event) {
    const itemId = event.target.parentElement.id;
    deleteItem(itemId);
  }

  return (
    <>
      <p className="App">
        Completed Items: {completedItems} / {items.length}
      </p>
      <div>
        {
        items.map((item) => {
          return (
            <div className="item" id={item.id} key={item.id}>
              <div className="content" onClick={handleClickItem}
              style={{ backgroundColor: item.completed?'#cbeecb':'transparent'}}
              >
                {item.body}
              </div>
              <button
                className="item-button"
                style={{ backgroundColor: "#f8f872" }}
                onClick={handleClickUp}
              >
                up
              </button>
              <button
                className="item-button"
                style={{ backgroundColor: "#a1a1e6" }}
                onClick={handleClickDown}
              >
                down
              </button>
              <button
                className="item-button"
                style={{ backgroundColor: "#fa8a8a" }}
                onClick={handleClickDelete}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
