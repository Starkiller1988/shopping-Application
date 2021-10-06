import { useEffect, useState } from 'react';
import './App.css';
import { ListItem } from './components/ListItem';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [itemsToBuy, setItemsToBuy] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      'https://fetch-me.vercel.app/shopping-list.json'
    );
    const data = await response.json();
    setShoppingItems(data);
  }, []);

  const updateShoppingList = (toggledItem) => {
    /* Wenn toggledItem schon auf der ShoppingListe steht, 
    dann rausnehmen, ansonsten hinzufügen */

    if (itemsToBuy.includes(toggledItem)) {
      const itemsStillToBuy = itemsToBuy.filter(
        (item) => item.id !== toggledItem.id
      );
      setItemsToBuy(itemsStillToBuy);
    } else {
      setItemsToBuy([...itemsToBuy, toggledItem]);
    }
  };

  return (
    <div className="App">
      <h1>Anitas Einkaufsliste 🛍</h1>
      <h2>Backlog</h2>
      <section className="backlog">
        {shoppingItems.map((item) => (
          <ListItem
            key={item}
            shoppingItem={item}
            onUpdateShoppingList={updateShoppingList}
          />
        ))}
      </section>
      <h2>Aktuelle Liste</h2>
      <ul>
        {itemsToBuy.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
