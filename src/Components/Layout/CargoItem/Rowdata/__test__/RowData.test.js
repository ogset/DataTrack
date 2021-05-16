import React from "react";
import { render } from "@testing-library/react";
import RowData from "./../RowData";
import "@testing-library/jest-dom/extend-expect";
const ShipmentTestData = {
  pickup: {
    address: {
      company: "aaaa",
      country: "Germany",
      city: "Berlin",
      postcode: "10555",
      street: "Schloßstraße 13"
    },
    date: {
      min: "28/11/2019",
      max: "29/11/2019"
    },
    hour: {
      min: "06:00",
      max: "17:00"
    },
    contact: {
      name: "Test-",
      email: "Dummyinfo@aaaa.com",
      phone: "+49(0)123456"
    }
  }
};

it("renders RowData correctly", () => {
  const { getByTestId } = render(
    <RowData
      data={ShipmentTestData.pickup}
      name="Pick Up"
      expand={false}
    ></RowData>
  );
  expect(getByTestId("row-item-title")).toHaveTextContent("Pick Up");
  expect(getByTestId("row-item-date")).toHaveTextContent(
    "Date:28/11/2019-29/11/2019Time:06:00-17:00"
  );
  expect(getByTestId("row-item-expand")).toHaveTextContent(
    "ContactTest-Dummyinfo@aaaa.com+49(0)123456"
  );
  expect(getByTestId("row-item-expand")).not.toHaveClass("flex-expand");
});
