import { useEffect } from 'react';
import './App.css';
import UserList from './Components/UserList';
import AddUserForm from './Components/AddUserForm';
import { useDispatch } from 'react-redux';
import { addUsers } from './redux/userSlice';
import { getUsers } from './Services/api';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
    .then(response => dispatch(addUsers(response.data)))
    .catch(error => console.error(error));
  }, [dispatch])

  return (
    <div className="App">
      <div className='half'>
        <UserList/>
      </div>
      <div className='half'>
        <AddUserForm/>
      </div>
    </div>
  );
}

export default App;
