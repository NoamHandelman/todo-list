import { useEffect, useState, useRef } from 'react';
import List from './components/List';

const getLocalStorage = () => {
  let todoList = localStorage.getItem('list');
  if (todoList) {
    return (todoList = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [item, setItem] = useState({
    title: '',
    date: '',
    description: '',
  });
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.title && item.date && isEditing) {
      console.log(list);
      console.log('before change');
      const updateList = [...list].map((todo) => {
        if (todo.id === editID) {
          console.log(`edit now - ${todo.id}`);
          return {
            ...todo,
            title: item.title,
            date: item.date,
            description: item.description,
          };
        }
        return todo;
      });
      setList(updateList);
      console.log(item);
      console.log('after change');

      console.log(list);
      console.log('after change');

      setItem({ title: '', date: '', description: '' });
      setEditID(null);
      setIsEditing(false);
    } else if (item.title && item.date) {
      const newItem = { ...item, id: new Date().getTime().toString() };
      setList([...list, newItem]);
      setItem({ title: '', date: '', description: '' });
    }
  };

  const editItem = (id) => {
    const editedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(editedItem);
    console.log(item);
    console.log('before edit');
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const titleInput = useRef();

  useEffect(() => {
    titleInput.current.focus();
    localStorage.setItem('list', JSON.stringify(list));
    if (isEditing && list.length === 0) {
      setItem({ title: '', date: '', description: '' });
      setIsEditing(false);
    }
  }, [list, isEditing]);

  return (
    <main>
      <h1>My Todo List</h1>
      <section className='container'>
        <form className='form' on onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Enter Task Title</label>
            <input
              maxLength={20}
              ref={titleInput}
              type='text'
              id='title'
              name='title'
              value={item.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='date'>Enter Date</label>
            <input
              type='date'
              id='date'
              name='date'
              value={item.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='description'>Enter Description</label>
            <textarea
              maxLength='20'
              id='description'
              name='description'
              value={item.description}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn submit-btn'>
            {isEditing ? 'Edit Task' : 'Add Task'}
          </button>
        </form>
        <List
          list={list}
          setList={setList}
          removeItem={removeItem}
          editItem={editItem}
        />
      </section>
    </main>
  );
}

export default App;
