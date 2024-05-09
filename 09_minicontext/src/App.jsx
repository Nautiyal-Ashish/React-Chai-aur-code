import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Context API and Redux</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
