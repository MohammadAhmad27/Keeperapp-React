import React, { useState, useEffect, useRef } from "react";

function CreateArea({ onAdd }) {

  const [note, setNote] = useState(() => {
    // Check if there are notes stored in localStorage
    const storedNote = localStorage.getItem("note");
    return storedNote ? JSON.parse(storedNote) : { title: "", content: "" };
  });

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Storing note in localStorage:", note);
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  useEffect(() => {
    inputRef.current.focus();
  }, [note.title]);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" ref={inputRef} value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button disabled={note.title.length < 3 || note.content.length < 3} onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
