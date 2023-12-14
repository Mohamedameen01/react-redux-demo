import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    // Providing the store to be available for your whole application.
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  )
}

export default App;
