import React from "react";
import GroceriesItem from "./GroceriesItem";

const GroceriesList = ({ handleAddToBasket, groceriesList }) => {
  return (
    <div>
      <header>
        <h3>
          <i className="fa fa-leaf" aria-hidden="true"></i> Groceries
        </h3>
      </header>
      <ul className="Groceries">
        {groceriesList.map((item) => {
          return (
            <li onClick={() => handleAddToBasket(item)}>
              <GroceriesItem key={item.id} item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroceriesList;
