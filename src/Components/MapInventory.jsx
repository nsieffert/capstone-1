import React from "react";

function MapInventory(props) {
  return (
    <div className="flex">
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.image} alt="avatar" />
        </div>
        <div className="bottom" />
        <p className="info">{props.sku}</p>
        <p className="info">{props.price}</p>
        <p className="info">{props.mfg}</p>
        <p className="info">{props.desc}</p>
        <p className="info">{props.category}</p>
      </div>
    </div>
  );
}

export default MapInventory;
