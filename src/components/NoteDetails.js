import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

const NoteDetails = ({ note }) => {
  const { dispach } = useContext(NoteContext);
  return (
    <li>
      <div className='content'>
        <h2>{note.title}</h2>
        <p>{note.detail}</p>
      </div>
      <button onClick={() => dispach({ type: "DELETE_NOTE", id: note.id })}>
        X
      </button>
    </li>
  );
};

export default NoteDetails;
