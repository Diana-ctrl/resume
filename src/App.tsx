import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import TodoList from './components/TodoList/TodoList';
import Dialogs from './components/Dialogs/Dialogs';
import MoreInformation from './components/MoreInformation/MoreInformation';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import { RootStateType } from './redux/store';
import {AllActionsType} from './redux/store';

type AppPropsType = {
  state: RootStateType
  dispatch: (action: AllActionsType) => void
}

function App(props: AppPropsType) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path={'/mainPage'} render={() => <MainContent profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route path={'/moreInformaition'} render={() => <MoreInformation />} />
        <Route exact path={'/message'} render={() => <Dialogs dialogs={props.state.dialogsPage} dispatch={props.dispatch}/>} />
        <Route path={'/music'} render={() => <Music />} />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
