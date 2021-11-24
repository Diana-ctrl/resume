import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersConteiner';
import MainContentContainer from './components/MainContent/MainContentContainer';
import WorkExamples from './components/Work examples/WorkExamples';
import MoreInformation from './components/MoreInformation/MoreInformation';
import Music from './components/Music/Music';
import { Route, useLocation, Redirect } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';



function App() {

  const location = useLocation();

  if (location.pathname === '/') {
    return <Redirect to="/mainPage" />
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer  />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path={'/mainPage/:userID?'} render={() => <MainContentContainer />} />
        <Route path={'/moreInformaition'} render={() => <MoreInformation />} />
        <Route exact path={'/message'} render={() => <DialogsContainer />} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/users'} render={() => <UsersContainer />} />
      </div>
      <WorkExamples />
    </div>
  );
}

export default App;
