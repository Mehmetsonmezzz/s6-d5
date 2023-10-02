import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import Names from "./components/Names";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        // handle success
        console.log(response);
        setCharacters(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {characters.map((karakter, i) => (
        <Names key={i} title={karakter.name}>
          <Karakter karakter={karakter} />
        </Names>
      ))}
    </div>
  );
};

export default App;
