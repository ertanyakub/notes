import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import NoteDetails from "./NoteDetails";

const NoteList = () => {
  const { notes } = useContext(NoteContext);
  return (
    <ul>
      {notes.map(note => {
        return <NoteDetails key={note.id} note={note} />;
      })}
    </ul>
  )
};

export default NoteList;
