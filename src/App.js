import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/cake/store';
import { Provider } from 'react-redux';

function App() {
  return (
    // Providing the store to be available for your whole application.
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
