import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './store/userSlice.js';


function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const hanndleClick = (e) => {
    if (e.target.classList.contains('li_class')) {
      e.target.children[0].classList.toggle('hidden');  
    }
  }
  return (
    <div className="App">
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? <ul>{
        users.map(user => (
          <li className='li_class' onClick={hanndleClick} key={user.id}>{user.name}
          <div className='hidden div_class'>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
          </li>
        ))
      }
      </ul> : null}
    </div>
  );
}

export default App;