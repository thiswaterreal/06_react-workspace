import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import RouteTest from './components/RouteTest';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
          <Route path='/diary' element={<Diary/>}></Route>
          <Route path='/diary/:id' element={<Diary/>}></Route>
        </Routes>

        <RouteTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
