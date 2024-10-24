import { Provider } from "react-redux";
import "./App.css";
import BirdList from "./Components/BirdList";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BirdList />
      </Provider>
    </>
  );
}

export default App;
