import React from 'react';
import { Table } from 'reactstrap';

function UserList({ userList }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
