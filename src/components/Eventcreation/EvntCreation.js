import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from '../Eventcreation/User';

import { setUser, selectUser } from "../../Reducers/userSlice";

export default function App() {
  const [user, setUsers] = useState({
    length: null,
    width: null
  });
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  console.log("userInfo", userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // set data to store on submit
    dispatch(setUser(user));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="length"
          onChange={handleChange}
          placeholder="Add Length"
        />
        <input
          type="text"
          name="width"
          onChange={handleChange}
          placeholder="Add Width"
        />
        <button type="submit">Submit</button>
      </form>
      <User />
    </div>
  );
}
