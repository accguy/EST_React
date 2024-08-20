import UserList from "./components/UserList";

function App() {
  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <>
      <h1>User List</h1>
      <UserList userList={data} />
    </>
  );
}
export default App;
