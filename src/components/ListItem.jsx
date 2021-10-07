import './ListItem.css';

export const ListItem = ({ shoppingItem, onListItemUpdate }) => {
  return (
    <p className="list-item" onClick={() => onListItemUpdate(shoppingItem)}>
      {shoppingItem.name}
    </p>
  );
};
