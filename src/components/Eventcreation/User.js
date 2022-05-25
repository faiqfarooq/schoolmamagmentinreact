import { useSelector } from "react-redux";

import { selectUser } from "../../Reducers/userSlice";
const User = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>My length is: </h1>
      <h2>{user?.length}</h2>

      <h1>My width is: </h1>
      <h2>{user?.width}</h2>
    </div>
  );
};

export default User;
