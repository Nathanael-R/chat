import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import { posts } from "./data";
import { io } from "socket.io-client";
function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(io.connect("http://192.168.43.87:5000"));
  }, []);

  useEffect(() => {
    socket.emit("newUser", user);
  }, [socket, user]);
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket}/>
          {posts.map((post) => {
            return <Card key={post.id} post={post} socket={socket} user={user}/>;
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
