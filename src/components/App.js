import './App.css';
import store from '../state/store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
1
    </div>
    </Provider>
  );
}

export default App;
