import React from "react";
import GroceriesItem from "./GroceriesItem";

const BasketList = ({ handleRemoveFromBasket, basketList, clearBasketList }) => {
  const isClear = !basketList.length;
  return (
      <div>
        <header>
          <h3>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i> Basket
          </h3>
          {isClear ? (
            <h3> </h3>
          ) : (
            <h3 className="clearBasket">
              <i className="fa fa-trash" aria-hidden="true" onClick={clearBasketList}></i>
            </h3>
          )}
        </header>
        {isClear ? (
          <ul className="Basket">
            <li>Your basket is empty!</li>
          </ul>
        ) : (
          <ul className="Basket">
            {basketList.map((item) => {
              return (
                <li onClick={() => handleRemoveFromBasket(item)}>
                  <GroceriesItem key={item.id} item={item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
  );
};

export default BasketList;
