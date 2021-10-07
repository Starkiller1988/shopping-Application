import './ListItem.css';

export const ListItem = ({ shoppingItem, onListItemUpdate, cssClass }) => {
  return (
    <span
      className={`list-item ${cssClass}`}
      onClick={() => onListItemUpdate(shoppingItem)}
    >
      {shoppingItem.name}
    </span>
  );
};
