import React, {useState} from "react";

function ToyForm({addToyToFile}) {
const [toyName, setToyName] = useState("")
const [toyImage, setToyImage] = useState("")

  function onChangeName(e){
    setToyName(e.target.value)
  }

  function onChangeImage(e){
    setToyImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    addToyToFile(toyName, toyImage)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={onChangeName}
          value={toyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={onChangeImage}
          value={toyImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
