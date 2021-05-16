import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Button from "./../Button";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button index={0}></Button>);
  expect(getByTestId("button")).toHaveTextContent("REORDER");
});
it("renders button correctly", () => {
  const { getByTestId } = render(<Button index={1}></Button>);
  expect(getByTestId("button")).toHaveTextContent("View Details");
});
it("renders button correctly", () => {
  const { getByTestId } = render(<Button index={2}></Button>);
  expect(getByTestId("button")).toHaveTextContent("REORDER");
});
it("renders button correctly", () => {
  const { getByTestId } = render(<Button index={2}></Button>);
  expect(getByTestId("button")).toHaveAttribute("disabled");
});
