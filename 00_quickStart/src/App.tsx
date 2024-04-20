import Profile from "./components/Profile";
import "./App.css";

const user1 = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const user2 = {
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return (
    <>
      <Profile user={user1} />
      <Profile user={user2} />
    </>
  );
}

export default App;
