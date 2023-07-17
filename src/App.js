import './App.css';
import AddButton from './components/AddButton';
import Header from './components/Header';
import NewTodo from './pages/NewTodo';
import TodoListPages from './pages/TodoListPages';
import TodoPage from './pages/TodoPage';
import { MemoryRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header/>
          <Routes>
            <Route path='/' Component={TodoListPages}/>
            <Route path='/todo/:id' Component={TodoPage}/>
            <Route path='/todo/new' Component={NewTodo}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
