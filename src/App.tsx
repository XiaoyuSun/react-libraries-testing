import UserCard from "./components/UserCard";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { createUsers } from "./helper";
import { useRef } from "react";

function App() {
  const users = createUsers();
  const virtuisoScrollRef = useRef<VirtuosoHandle>(null);

  console.log("🚀 ~ App ~ users:", users.length);

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="mt-10">Playing Virtuoso</h1>

      <button
        className="uppercase"
        onClick={() =>
          virtuisoScrollRef.current?.scrollToIndex({
            index: Math.random() * users.length,
            align: "start",
          })
        }
      >
        scroll
      </button>

      <div className="mt-2 border border-gray-400">
        <Virtuoso
          ref={virtuisoScrollRef}
          style={{ height: "600px", width: "600px" }}
          data={users}
          itemContent={(_, user) => <UserCard user={user} />}
        />
      </div>
    </div>
  );
}

export default App;
