import React, { useContext, useState } from "react";
import { NoteContext } from "../contexts/NoteContext";

const AddNote = () => {
  const { dispach } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispach({ type: "ADD_NOTE", note: { title, detail } });
    setDetail("");
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="note title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="note detail"
        value={detail}
        onChange={e => setDetail(e.target.value)}
      />
      <input type="submit" value="add" />
    </form>
  );
};

export default AddNote;
