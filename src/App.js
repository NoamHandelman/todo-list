import React, { useState } from 'react';
import List from './components/List';

function App() {
  const [item, setItem] = useState({ title: '', date: '', description: '' });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...item, id: new Date().getTime().toString() };
    setList([...list, newItem]);
    setItem({ title: '', date: '', description: '' });
  };

  return (
    <section className='container'>
      {/* <h1>My List</h1> */}
      <form className='form' on onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Enter Task Title</label>
          <input
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
            maxlength='20'
            id='description'
            name='description'
            value={item.description}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add Task</button>
      </form>
      <div>
      <List list={list} setList={setList} />
      </div>
      <button type='btn' onClick={() => setList([])}>
        Clear List
      </button>
    </section>
  );
}

export default App;
