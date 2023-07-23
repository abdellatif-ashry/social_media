import './App.css';
import Navbar from './component/utilitys/Navbar';
import Homepage from './pages/Home_page';
import Modals from './component/utilitys/Modals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile_page from './pages/Profile_page';


function App()
{

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
      <Modals />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/profile/:id' element={<Profile_page />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
