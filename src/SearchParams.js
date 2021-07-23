import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const breeds = [];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  //   function updateLocation(e) {
  //     setLocation(e.target.value);
  //   }

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  //   useEffect(() => {
  //     const timer = setTimeout(() => alert("hi"), 3000);
  //     return () => clearTimeout(timer);
  //   });

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            // onChange={updateLocation}
            value={location.toUpperCase()}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            {breeds.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          ></Pet>
        );
      })}
    </div>
  );
};

export default SearchParams;
