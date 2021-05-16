import React, { useState } from "react";
import RowData from "./Rowdata/RowData";
import Button from "./Button/Button";

const CargoItem = props => {
  const cargo = props.data.cargo; //Shortened variable
  const pickup = props.data.pickup; // Shortened variable
  const dropOff = props.data.drop_off; // Shortened variable
  const [expand, setExpand] = useState(false);
  const expandDetails = () => {
    setExpand(!expand);
  };
  return (
    <div className="flex-item" onClick={expandDetails}>
      <div className="flex-coloumn">
        <span className="font-bold">
          {pickup.address.postcode} {pickup.address.city}
          &#8594;
          {dropOff.address.postcode} {dropOff.address.city}
        </span>
        <ul className="title first firstrow">
          Ref.:
          <span className="text">{props.data.reference.toUpperCase()}</span>
        </ul>
        <ul className="title firstrow">
          Cargo: <span className="cargo-status">{props.data.state}</span>
        </ul>
        <ul className="title firstrow">
          Fixed Route:
          <span className="text">
            {props.data.reference_route.toUpperCase()}
          </span>
        </ul>
      </div>
      <div className="flex-coloumn">
        <div>
          <ul className="title rows">Cargo</ul>
          <ul>{cargo.type}</ul>
          <ul>{cargo.weight}</ul>
          <ul>{cargo.size}</ul>
        </div>
        <div className={"flex-divided" + (expand ? " flex-expand" : "")}>
          <ul className="title expand">Tracking code</ul>
          <ul>{props.data.tracking_number}</ul>
        </div>
      </div>
      <div className="flex-coloumn">
        <RowData data={pickup} name="Pick Up" expand={expand}></RowData>
      </div>
      <div className="flex-coloumn">
        <RowData data={dropOff} name="Drop Off" expand={expand}></RowData>
      </div>
      <div className="flex-coloumn button-coloumn">
        <Button index={props.index}></Button>
      </div>
    </div>
  );
};
export default CargoItem;
