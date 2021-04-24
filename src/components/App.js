import './App.css';
import store from '../state/store'
import { Provider } from 'react-redux';
import EntryList from './EntryList';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <EntryList/>
    </div>
    </Provider>
  );
}

export default App;
