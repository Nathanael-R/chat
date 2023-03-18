import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import { posts } from "./data";
import { io } from "socket.io-client"
function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3000");
  }, [])
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => {
            return <Card key={post.id} post={post} />;
          })}
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={() => setUser(userName)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
