import React from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  return (
    <>
      <h1>News {id}</h1>
      <p style={{width: "50%"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis
        culpa mollitia iusto quia consectetur architecto, cupiditate ullam
        voluptate ipsa inventore modi ducimus laboriosam nihil distinctio
        nostrum tempore in omnis.
      </p>
    </>
  );
};

export default News;
