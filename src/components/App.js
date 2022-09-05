import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => {
        setToys(data.map(toy => toy))
      })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToyToFile(toyName, toyImage){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0,
      })
    })
    .then(res => res.json())
    .then((updatedData) => {
      const updatedToys = [...toys, updatedData]
      setToys(updatedToys)
    })
  }

  function deleteToyFromFile(toy){
    const updatedToys = toys.filter((t) => t.id !== toy.id)
    setToys(updatedToys)
  }

  function updateToy(updatedToy) {
    const updatedToys = toys.map(t => 
      t.id === updatedToy.id ? updatedToy : t)
      setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToyToFile={addToyToFile} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToyFromFile={deleteToyFromFile} updateToy={updateToy}/>
    </>
  );
}

export default App;
