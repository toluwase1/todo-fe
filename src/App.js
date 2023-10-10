
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateTodo from './UpdateTodo';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import TodoView from './TodoView'
import TodoSearch from './TodoSearch';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Todo />}></Route>
          <Route path = '/create' element = {<CreateTodo />}></Route>
          <Route path = '/update/:id' element = {<UpdateTodo />}></Route>
          <Route path = '/todo/:id' element = {<UpdateTodo />}></Route>
          <Route path="/todo/view/:id" element={<TodoView />} />
          <Route path="/todo/search" element={<TodoSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
