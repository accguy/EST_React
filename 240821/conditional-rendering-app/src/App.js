import { useState } from "react";
import SimpleRouter from "./components/SimpleRouter";

function App() {
  const [userRole, setUserRole] = useState("guest");
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const roles = ["guest", "user", "admin"];
  return (
    <>
      <h1>권한: {userRole}</h1>
      <button
        onClick={() => {
          setUserRole("guest");
          setIsLoading(true);
        }}
      >
        guest
      </button>
      <button onClick={() => setUserRole("user")}>user</button>
      <button onClick={() => setUserRole("admin")}>admin</button>
      <button onClick={() => setUserRole(roles[Math.floor(Math.random() * 3)])}>
        random
      </button>
      <SimpleRouter
        userRole={userRole}
        setUserRole={setUserRole}
        isLoading={isLoading}
      />
    </>
  );
}
export default App;
