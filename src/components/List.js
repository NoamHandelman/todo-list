import React from 'react';

const List = ({ list, setList }) => {
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <article className='list'>
      {list.map((item) => {
        const { title, date, description, id } = item;
        return (
          <div className='todo-item' key={id}>
            <h5>
              {title} : {date}
            </h5>
            <p>{description}</p>
            <button type='btn' onClick={() => removeItem(id)}>
              delete
            </button>
          </div>
        );
      })}
    </article>
  );
};

export default List;
