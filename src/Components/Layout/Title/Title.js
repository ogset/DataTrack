import React from "react";

const Title = () => {
  return (
    <div data-testid="title" className="flex-title">
      <span className="flex-title float-left ">Shipments</span>
      <span className="flex-title float-right">Actions</span>
    </div>
  );
};

export default Title;
