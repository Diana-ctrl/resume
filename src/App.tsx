import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import TodoList from './components/TodoList/TodoList';
import MoreInformation from './components/MoreInformation/MoreInformation';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path={'/mainPage'} render={() => <MainContent />} />
        <Route path={'/moreInformaition'} render={() => <MoreInformation />} />
        <Route exact path={'/message'} render={() => <DialogsContainer />} />
        <Route path={'/music'} render={() => <Music />} />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
