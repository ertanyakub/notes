import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

const NavBar = () => {
  const { notes } = useContext(NoteContext);
  return (
    <nav>
      <h1>My Notes</h1>
      {notes.length ? <p>You have {notes.length} note{notes.length > 1 ? 's': null}</p> : <p>Add some note</p>}
    </nav>
  );
};

export default NavBar;
