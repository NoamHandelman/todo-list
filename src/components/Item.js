import { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus, AiFillEdit } from 'react-icons/ai';

const Item = ({ id, title, date, description, removeItem, editItem }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <article className='todo-item'>
      <div className='todo-info'>
        <h3 className='todo-title'>
          {title} : <span className='todo-date'>{date}</span>
        </h3>
        {showDescription && <p className='desc'>{description}</p>}
      </div>
      <div className='todo-btns'>
        <button
          className='desc-btn'
          type='button'
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <button
          className='remove-btn'
          type='button'
          onClick={() => removeItem(id)}
        >
          <BsTrashFill />
        </button>
        <button className='edit-btn' type='button' onClick={() => editItem(id)}>
          <AiFillEdit />
        </button>
      </div>
    </article>
  );
};

export default Item;
