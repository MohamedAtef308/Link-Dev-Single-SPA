import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const newsList = [
  { id: 1, headline: "Headline 1" },
  { id: 2, headline: "Headline 2" },
  { id: 3, headline: "Headline 3" },
  { id: 4, headline: "Headline 4" },
  { id: 5, headline: "Headline 5" },
];

const Listings = () => {
  return (
    <>
      <h1>News Listing</h1>
      <div>
        {newsList.map((news) => {
          return (
            <div key={news.id}>
              <h2>{news.headline}</h2>
              <Link to={`/news/${news.id}`}>view page</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listings;
