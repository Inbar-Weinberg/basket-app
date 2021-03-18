import React, { useState } from "react";
import "./style/App.css";
//--components
import GroceriesList from "./components/GroceriesList";
import BasketList from "./components/BasketList";
import SearchBar from "./components/SearchBar";

import Footer from "./components/Footer";

//-- else
import { allGroceries } from "./components/allGroceries";

function App() {
  const [groceriesList, setGroceriesList] = useState(allGroceries);
  const [basketList, setBasketList] = useState([]);
  const handleAddToBasket = (item) => {
    const itemIndexInBasket = basketList.findIndex(
      (basketItem) => basketItem.id === item.id
    );

    if (itemIndexInBasket >= 0) {
      basketList[itemIndexInBasket].quantity++;
      setBasketList([...basketList]);
    } else
      setBasketList((prevBasket) => [...prevBasket, { ...item, quantity: 1 }]);
  };

  const handleRemoveFromBasket = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
      setBasketList([...basketList]);
    } else
      setBasketList((prevBasket) =>
        prevBasket.filter((existingItem) => existingItem.id !== item.id)
      );
  };
  const handleChangeInSearch = (value) => {
    const filteredGroceries = allGroceries.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredGroceries.length);
    setGroceriesList([...filteredGroceries]);
  };
  const clearBasketList = () => {
    setBasketList([]);
  };

  return (
    <div  className="App">
      <header className="App-header">
        <i className="fa fa-shopping-basket fa-6"></i>
        <h1 className="App-title">Hello, Basket</h1>
      </header>
      <nav>
        <SearchBar handleChangeInSearch={handleChangeInSearch} />
      </nav>
      <main>
        <GroceriesList
          handleAddToBasket={handleAddToBasket}
          groceriesList={groceriesList}
        />
        <BasketList
          clearBasketList={clearBasketList}
          handleRemoveFromBasket={handleRemoveFromBasket}
          basketList={basketList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
