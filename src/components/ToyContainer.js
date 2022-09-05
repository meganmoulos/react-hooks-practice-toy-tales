import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToyFromFile, updateToy}) {

  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard deleteToyFromFile={deleteToyFromFile} updateToy={updateToy} toy={toy} key={toy.name} />)}
      </div>
  );
}

export default ToyContainer;
