import React from "react";

const RowItem = ({ data, name, expand }) => {
  return (
    <div>
      <div data-testid="row-item-title" className="title rows">
        {name}
        <ul>{data.address.company}</ul>
        <ul>{data.address.street}</ul>
        <ul>
          {data.address.postcode} {data.address.city},{data.address.country}
        </ul>
        <div data-testid="row-item-date" className="title expand">
          Date:
          <span className="text">
            {data.date.min}-{data.date.max}
          </span>
          <ul className="title">
            Time:
            <span className="text">
              {data.hour.min}-{data.hour.max}
            </span>
          </ul>
        </div>
      </div>
      <div
        data-testid="row-item-expand"
        className={"flex-divided" + (expand ? " flex-expand" : "")}
      >
        <ul data-testid="row-item-hidden" className="title expand">
          Contact
        </ul>
        <ul>{data.contact.name}</ul>
        <ul>{data.contact.email}</ul>
        <ul>{data.contact.phone}</ul>
      </div>
    </div>
  );
};

export default RowItem;
