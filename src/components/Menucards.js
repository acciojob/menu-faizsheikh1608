import React from "react";

const Menucards = function (props) {
  const { data } = props;

  return (
    <div className="card">
      <div className="img--div">
        <img alt={data.title} src={data.img}></img>
      </div>
      <div className="parent">
        <div className="header">
          <h2>{data.title}</h2>
          <h3>$ {data.price}</h3>
        </div>
        <div>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Menucards;
