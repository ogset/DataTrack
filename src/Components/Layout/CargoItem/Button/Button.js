import React from "react";

const ButtonRender = ({ index }) => {
  let button = null;
  switch (index) {
    case 0:
      button = (
        <button data-testid="button" className="button">
          REORDER
        </button>
      );
      break;
    case 1:
      button = (
        <div data-testid="button" className="button-text">
          View Details
        </div>
      );
      break;
    case 2:
      button = (
        <button data-testid="button" className="button" disabled={true}>
          REORDER
        </button>
      );
      break;
    default:
      button = null;
  }
  return button;
};

export default ButtonRender;
