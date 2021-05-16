import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "../Title";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Title />, div);
});

it("renders title correctly", () => {
  const { getByTestId } = render(<Title>Shipment</Title>);
  expect(getByTestId("title")).toHaveTextContent("Shipment");
});
