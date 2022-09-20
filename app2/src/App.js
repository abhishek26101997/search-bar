
import { useState } from 'react';
import './App.css';




function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Papaya",
    "Cherry",
    "Lemon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      
    }
    const filteredValues = list.filter((item) =>item.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0);
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div className='search-bar'>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      <div className='items'>
      {
        filterList.map((item) => (
          <div key={item}>{item}</div> //Display each item
        ))}
      </div>  
    </div>
  );
}


export default App;
