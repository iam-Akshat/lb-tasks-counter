import './App.css';
import store from '../state/store'
import { Provider } from 'react-redux';
import EntryList from './EntryList';
import AddEntry from './AddEntry';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddEntry/>
      <EntryList/>
    </div>
    </Provider>
  );
}

export default App;
