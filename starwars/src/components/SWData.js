import React, { useState, useEffect } from "react";
import axios from "axios";
import SWCard from "./SWCard";

export default function SWData() {
  const [characters, setCharacters] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })

      //****************** */ Attempting multiple API calls to grab nested data *************

      //   const [planets, setPlanets] = useState([]);
      //   const [films, setFilms] = useState([]);
      //   .then(
      //     axios.get("https://swapi.co/api/planets/").then(response => {
      //       console.log(response.data.results);
      //       setPlanets(response.data.results);
      //     })
      //   )

      //   .then(
      //     axios.get("https://swapi.co/api/films/").then(response => {
      //       console.log(response.data.results);
      //       setFilms(response.data.results);
      //     })
      //   )

      .catch(error => {
        console.log("There was an error returning data", error);
      });
  }, []);

  return (
    <div className="characters">
      {characters.map(char => {
        return (
          <SWCard
            key={char.id}
            name={char.name}
            gender={char.gender}
            height={char.height}
            weight={char.mass}
          />
        );
      })}
    </div>
  );
}
