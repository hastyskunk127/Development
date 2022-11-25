// stylesheets
import './App.css';
// components
import PharaohCard from './components/PharaohCard';
import ControlPanel from './components/ControlPanel';
// dataset
import pharaohData from "./assets/pharaohs-data.json";
// react
import {useState} from 'react';

// Updates link name for images
pharaohData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [timePeriod, setTimePeriod] = useState("All");
  const [gender, setGender] = useState("All");
  const [sortType, setSort] = useState("Start");
  const [favorites, updateFavorites] = useState([]);
  const [favoriteOn, setFavoriteOn] = useState("False");

  const matchesPeriodFilter = (item) => {
    if (gender === "All") {
      return true;
    } else {
      return gender === item.gender;
    }
  }

  const matchesGenderFilter = (item) => {
    if (timePeriod === "All") {
      return true;
    } else {
      return timePeriod === item.timePeriod;
    }
  }

  const matchesFavoritesFilter = (item) => {
    if (favoriteOn === "False") {
      return true;
    } else {
      return favorites.includes(item);
    }
  }

  const filter = (item) => {
    return matchesPeriodFilter(item) && matchesGenderFilter(item) && matchesFavoritesFilter(item);
  }

  const sortStart = (a, b) => {
    const aStart = parseInt(a.startRule.split(" ")[1], 10);
    const bStart = parseInt(b.startRule.split(" ")[1], 10);
    return bStart - aStart;
  }

  const sortDuration = (a, b) => {
    return b.ruleDuration - a.ruleDuration;
  }

  const getSort = () => {
    return (sortType === "Start") ? sortStart : sortDuration;
  }

  const filteredData = pharaohData.filter(filter);

  filteredData.sort(getSort());

  return (
    <div className="App">
      <p className="Title">Notable Pharaohs</p>
      <div className="Control">
          <ControlPanel period={timePeriod} setTime={setTimePeriod} gender={gender}
          setGender={setGender} sort={sortType} setSort={setSort} favoriteOn={favoriteOn} 
          setFavoriteOn={setFavoriteOn} favorites={favorites}/>
      </div>
        <div className="Pharaohs">
          {filteredData.map((pharaoh, index) => (
            <PharaohCard item={pharaoh} key={index} period={timePeriod} favorites={favorites} 
            updateFavorites={updateFavorites}/>
        ))}
      </div>
    </div>
  );
}

export default App;
