import { useEffect, useState } from 'react';
import './App.css';
import { ListItem } from './components/ListItem';

function App() {
  const [shoppingBacklog, setShoppingBacklog] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      'https://fetch-me.vercel.app/shopping-list.json'
    );
    const data = await response.json();
    setShoppingBacklog(data);
  }, []);

  const moveItemToShoppingList = (itemToMove) => {
    setShoppingList([...shoppingList, itemToMove]);

    const remainingBacklogItems = shoppingBacklog.filter(
      (item) => item.id !== itemToMove.id
    );
    setShoppingBacklog(remainingBacklogItems);
  };

  const moveItemToBacklog = (itemToMove) => {
    setShoppingBacklog([...shoppingBacklog, itemToMove]);

    const remainingShoppingItems = shoppingList.filter(
      (item) => item.id !== itemToMove.id
    );
    setShoppingList(remainingShoppingItems);
  };

  return (
    <div className="App">
      <h1>Anitas Einkaufsliste 🛍</h1>
      <h2>Backlog</h2>
      <section className="backlog">
        {shoppingBacklog.map((item) => (
          <ListItem
            key={item}
            shoppingItem={item}
            onListItemUpdate={moveItemToShoppingList}
          />
        ))}
      </section>
      <h2>Einkaufsliste</h2>
      <section className="shopping-list">
        {shoppingList.map((item) => (
          <ListItem
            key={item}
            shoppingItem={item}
            onListItemUpdate={moveItemToBacklog}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
