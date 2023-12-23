import { Link } from "react-router-dom";
import People from "../components/people";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { useState } from "react";
import "./index.css";
import defaultImage from "../photos/blue.png"; 


export default function Index() {
  const store = useAppContext();

  const peoplesContainer= {
    flexWrap: "wrap",
    gap: "10px",};

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = store.items.filter((item) =>
      item.title.toLowerCase().includes(term)
    );

    setSearchResults(filteredResults);
  };

  return (
    <Layout>
      <div style={peoplesContainer}>

       <div className="form">
        <input className="search-input"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
        </div> 

        {searchResults.map((item) => (
          <People key={item.id} item={item} defaultImage={defaultImage} />
        ))}
      </div>
    </Layout>
  );
}
