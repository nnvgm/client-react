import React, { useState, useEffect } from 'react';

// Components
import UserList from './components/UserList';
import Modals from './components/Modals';
// utils
import axios from './utils/axios';

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    let mounted = true;
    const getDatas = async () => {
      const { data } = await axios.get('/api/v1/users');

      if (mounted && data.success) {
        const { users } = data.data;
        setDatas(users);
      }
    };

    getDatas();

    return () => {
      mounted = false;
    };
  }, []);

  const onAddNewUser = async (newUser) => {
    const { data } = await axios.post('/api/v1/users', newUser);
    if (data.success) {
      const { user } = data.data;
      setDatas([...datas, user]);
    }
  };

  return (
    <div className="App">
      <h2 className="mb-2 text-center">Manager Users - MERN DEMO</h2>
      <Modals onAddNewUser={onAddNewUser} />
      <UserList userList={datas} />
    </div>
  );
}

export default App;
