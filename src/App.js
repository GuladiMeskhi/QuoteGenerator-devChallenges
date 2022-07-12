import './App.css';
import { RandomQuote } from './Pages/RandomQuote';
import { BrowserRouter,
         Routes,
         Route } from 'react-router-dom'
import {AuthorsQuote} from './Pages/AuthorsQuote'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RandomQuote/>}/>
          <Route path='/author/:authorname' element={<AuthorsQuote/>}/>
        </Routes>
      </BrowserRouter>
      <span style={{fontWeight:'600',fontSize:'16px',justifySelf:'center',marginBlock:'20px'}}>Created by <a href='#'>Guladi Meskhi</a> - devChallenges.io</span>
    </div>
  );
}

export default App;
