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
      <h1 className="my-10 text-3xl">Playing Virtuoso</h1>

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded uppercase"
        onClick={() =>
          virtuisoScrollRef.current?.scrollToIndex({
            index: Math.random() * users.length,
            align: "start",
          })
        }
      >
        jump
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
