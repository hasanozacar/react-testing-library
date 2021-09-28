import React from "react";

import { api } from "./api";

 const RenderAsync = () => {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now()
    };

    // *** NEW ***
    api.create("/items", newItem).then((persistedItem) => {
      setText("");
      setItems(items.concat(persistedItem));
    });
  };

  return (
    <div>
      <h1>React Testing Library</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input style={{width:"100%"}} id="new-todo" value={text} onChange={handleChange} />
        <button style={{width:"50%"}}>Add #{items.length + 1}</button>
      </form>
    </div>
  );
};
export default RenderAsync;