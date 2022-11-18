import Avatar from "./components/Avatar";
import Contacts from "./components/Contacts";
import config from "./config.json";

const App = () => {
  return (
    <div>
      <Avatar img="https://avatars.githubusercontent.com/u/65506911?v=4" />
      <Contacts contacts={config.contacts} />
    </div>
  );
};

export default App;
