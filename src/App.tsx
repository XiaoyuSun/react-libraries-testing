import "./App.css";
import UserCard from "./components/UserCard";
import { Virtuoso } from "react-virtuoso";
import { createUsers } from "./helper";

function App() {
  const users = createUsers(0, 1000);

  return (
    <div>
      <h1>Playing Virtuoso</h1>
      <Virtuoso
        style={{ height: "400px", width: "100%" }}
        data={users}
        itemContent={(_, user) => <UserCard user={user} />}
      />
    </div>
  );
}

export default App;
