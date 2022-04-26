import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);
//pertama
  const getUser = async () => {
    const res = await axios.get('http://localhost:5000/users')
    setUser(res.data)
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async (id) => { //kesepulu
    try {
        await axios.delete(`http://localhost:5000/users/${id}`)
        getUser()
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="columns">
      <div className="column is-half">
          <Link className="button is-success mt-3" to='/add'>Add new</Link>
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                      <Link to={`edit/${user._id}`} className="button is-info is-small">Edit</Link> //ketujuh
                      <button onClick={() => deleteUser(user._id)} className="button is-danger is-small">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
