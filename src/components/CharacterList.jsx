import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";

const NextPage = ({ page, setpage }) => {
  return (
    <div className="d-flex mb-2 width-100% justify-content-between ">
      <button
        onClick={() => {
          setpage(page - 1);
        }}
        className="btn btn-outline-dark text-white"
      >
        Back Page: {page}
      </button>

      <button
        onClick={() => {
          setpage(page + 1);
        }}
        className=" btn btn-outline-dark text-white "
      >
        Next Page: {page}
      </button>
    </div>
  );
};

const CharacterList = () => {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${Page}`
      );
      const data = await res.json();
      setLoading(false);
      setCharacter(data.results);
      console.log(data);
    }
    fetchData();
  }, [Page]);

  return (
    <div className="container bg-transparent">
      <NextPage page={Page} setpage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4 mb-2" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
