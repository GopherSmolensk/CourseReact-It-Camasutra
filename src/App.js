import { BrowserRouter, Routes,  Route } from "react-router-dom";
import './App.css';
import DialogsContainer from './components/NavBar/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/NavBar/News/News';
import NavBarSettings from './components/NavBar/NavBarSettings/NavBarSettings';
import Music from './components/NavBar/Music/Music';
import UsersContainer from './components/Users/UsersContainer'
import React from 'react';



const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <Routes>

          <Route path='/dialogs/*' element={<DialogsContainer />} />

          <Route path='/profile/:userId' element={<ProfileContainer/>} />
         

          <Route path='/news/*' element={<News />} />

          <Route path='/navBarSettings/*' element={<NavBarSettings />} />
    
          <Route path='/music/*' element={<Music />} />

          <Route path='/users/*' element={<UsersContainer />} />
          
          



        </Routes>

      </div >
    </BrowserRouter >
  );
}

export default App;
