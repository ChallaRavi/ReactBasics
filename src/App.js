// /* global React ReactDOM*/

import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),

//     //...[1,2,3,4].map((i) => React.createElement("h1", {}, i)),
//     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havnese" }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocateil",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havnese" />
      <Pet name="Pepper" animal="Bird" breed="Cocateil" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" /> */}
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
