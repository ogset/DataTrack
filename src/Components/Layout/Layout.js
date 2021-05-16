import React from "react";
import ShipmentData from "../../assets/Data/shipment_json_sample";
import CargoItem from "./CargoItem/CargoItem";

const LayOut = () => {
  return ShipmentData.map((shipObj, index) => {
    return (
      <div key={index}>
        <CargoItem data={shipObj} index={index}></CargoItem>
      </div>
    );
  });
};

export default LayOut;
