import React, { useState } from 'react';

// Components
import UserList from './components/UserList';
import Modals from './components/Modals';

function App() {
  const [datas, setDatas] = useState([{ id: 1, name: 'Jane', age: 30 }]);

  const onAddNewUser = (user) => {
    setDatas([...datas, user]);
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
