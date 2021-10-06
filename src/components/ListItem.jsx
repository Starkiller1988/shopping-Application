import './ListItem.css';
import { useState } from 'react';

export const ListItem = ({ shoppingItem, onUpdateShoppingList }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    onUpdateShoppingList(shoppingItem);
  };
  return (
    <div className="list-item">
      <input
        type="checkbox"
        id={shoppingItem.name}
        name={shoppingItem.name}
        checked={checked}
        onChange={() => handleChange()}
      />
      <label htmlFor={shoppingItem.name}>{shoppingItem.name}</label>
    </div>
  );
};
