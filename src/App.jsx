import Contacts from "./components/Contacts";
import config from "./config.json";

const App = () => {
  return (
    <div>
      <Contacts contacts={config.contacts} />
    </div>
  );
};

export default App;
