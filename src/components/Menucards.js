/*import React from "react";

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
*/
import React from "react";

const Menucards = ({ item }) => {
  const { title, price, desc, category, img } = item;
  // console.log(title)

  return (
    <div
      data-test-id={"menu-item-" + category}
      style={{ display: "flex", border: "1px solid black", width: "500px" }}
    >
      <img src={img} alt="broken" />

      <div>
        <div>
          <h3>{title}</h3>
          <span>{price}</span>
        </div>

        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Menucards;
