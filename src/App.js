
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    // Providing the store to be available for your whole application.
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        
      </div>
    </Provider>
  )
}

export default App;
