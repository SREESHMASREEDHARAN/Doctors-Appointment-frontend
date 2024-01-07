
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './Components/Doctors';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewDoctor from './Components/ViewDoctor';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/'element={<Doctors/>}/>
          <Route path='/view/:id' element={<ViewDoctor/>}/>
        </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
