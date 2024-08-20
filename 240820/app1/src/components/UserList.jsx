import User from "./User";

function UserList({ userList }) {
  return (
    <dl>
      {userList.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </dl>
  );
}

export default UserList;
