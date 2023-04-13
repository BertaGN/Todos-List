import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <TodoWrapper  />
    </div>
  );
}

export default App;
