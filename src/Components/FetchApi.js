import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FetchApi.css";
import { Link } from "react-router-dom";

const FetchApi = ({ cat }) => {
  const [Data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(
        cat ? 
        `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=70b319a2b5f04683b08a7a07d18d3269`:
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=70b319a2b5f04683b08a7a07d18d3269"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);


  return (
    <div className="fetchApi">
      <h2>{cat ? cat.toUpperCase() : "Top"} Headlines</h2>
      <div className="main-data-div">
        {Data
          ? Data.map((items) => (
              <div className="data-div">
                <Link to={items.url} target="_blank"><img src={items.urlToImage} alt="image not found"/></Link>
                <h4>{items.title}</h4>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchApi;
