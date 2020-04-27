import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modals({ onAddNewUser }) {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    age: '',
  });

  const toggle = () => setModal(!modal);
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, age } = form;
    const newUser = {
      name,
      age,
    };

    onAddNewUser(newUser);

    setForm({
      user: '',
      age: '',
    });

    toggle();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        New User
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create New User</ModalHeader>
        <ModalBody>
          <form>
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={(e) => onChange(e)}
            />
            <input
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={(e) => onChange(e)}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modals;
