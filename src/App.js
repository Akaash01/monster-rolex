import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/Card-list/CardList.component";
import SearchBox from "./components/Search box/SearchBox.comonent";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFeild] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    let updatedFileteredArr = monsters.filter((x) =>
      x.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredArr(updatedFileteredArr);
  }, [monsters, searchField]);
  const onSearchChange = (e) => {
    let searchValue = e.target.value.toLocaleLowerCase();
    setSearchFeild(searchValue);
  };
  return (
    <div className="App">
      <div className="app-title">MONSTERS</div>
      <SearchBox
        className="searchMonster"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
      <CardList monsters={filteredArr} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => this.setState({ monster: users }));
//   }
//   onSearchChange = (e) => {
//     let searchValue = e.target.value.toLocaleLowerCase();
//     this.setState({ searchField: searchValue });
//   };
//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this;
//     let filteredArr = monster.filter((x) =>
//       x.name.toLocaleLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">
//         <div className="app-title">MONSTERS</div>
//         <SearchBox
//           className="searchMonster"
//           placeholder="search monsters"
//           onChange={onSearchChange}
//         />
//         <CardList monsters={filteredArr} />
//       </div>
//     );
//   }
// }

export default App;
