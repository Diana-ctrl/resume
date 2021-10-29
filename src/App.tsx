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
import {StoreType} from './redux/reduxStore';

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path={'/mainPage'} render={() => <MainContent store= {props.store} />} />
        <Route path={'/moreInformaition'} render={() => <MoreInformation />} />
        <Route exact path={'/message'} render={() => <DialogsContainer store= {props.store}/>} />
        <Route path={'/music'} render={() => <Music />} />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
