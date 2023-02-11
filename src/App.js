import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Connect from './components/Connect';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connect></Connect>} ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
