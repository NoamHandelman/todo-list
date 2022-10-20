import React from 'react';
import Item from './Item';

const List = ({ list, setList, editItem, removeItem }) => {
  return (
    <section className='list'>
      {list.length === 0 && <h2>Nothing To See Here ...</h2>}
      {list.map((item) => {
        return (
          <Item
            key={item.id}
            {...item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
      {list.length > 0 && (
        <button type='button' className='btn clear-btn' onClick={() => setList([])}>
          Clear List
        </button>
      )}
    </section>
  );
};

export default List;
