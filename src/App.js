import React from "react";
import NoteContextProvider from "./contexts/NoteContext";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

function App() {
  return (
    <div className="App">
      <NoteContextProvider>
        <NavBar />
        <NoteList />
        <AddNote />
      </NoteContextProvider>
    </div>
  );
}

export default App;
