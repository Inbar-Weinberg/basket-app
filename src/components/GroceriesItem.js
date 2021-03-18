import React from "react";

const GroceriesItem = ({ item }) => {
  return (
    <span>
      {item.quantity > 0 && <>{item.quantity + " "}</>}
      {item.name}
    </span>
  );
};

export default GroceriesItem;
