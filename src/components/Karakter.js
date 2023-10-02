import React from "react";
const Karakter = ({ karakter }) => {
  return (
    <div className="karakter">
      <p>gender: {karakter.gender}</p>
      <p>Height: {karakter.height}</p>
      <p>Mass: {karakter.mass}</p>
      <p>BirtYear: {karakter.birth_year}</p>
      <p>Eye Color: {karakter.eye_color}</p>
      <p>Hair Color: {karakter.hair_color}</p>
      <p>Skin Color: {karakter.skin_color}</p>
      <p>Films: {karakter.films}</p>
    </div>
  );
};

export default Karakter;
