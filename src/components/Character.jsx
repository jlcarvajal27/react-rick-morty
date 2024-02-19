import React from "react";

const Character = ({ character }) => {
  return (
    <>
      <div className="card card-body text-start p-5 text-break fs-4 fw-bold text-white bg-transparent border-3 ">
        <h3 className="fs-3 h1  mt-2 text-black">{character.name}</h3>
        <img
          className="img-fluid rounded-pill mb-3"
          src={character.image}
          alt={character.name}
        />
        <div className="card-body">
          <p>- Location: {character.location.name}</p>
          <p>- Gender: {character.gender}</p>
          <p className="fs-6">-Origin: {character.origin.name}</p>
        </div>
      </div>
    </>
  );
};

export default Character;
