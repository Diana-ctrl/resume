import MainContent from './MainContent'
import React from 'react';
import axios from 'axios';
import { setUserProfileActionCreator } from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';
import { connect } from 'react-redux';
import { ProfileInfoAboitUserType } from './MainInfo/MainInfo';

type MainContentPropsType = MDTPType & MSTPType
type MDTPType = {
  setUserProfile: (profile: ProfileInfoAboitUserType) => void
}
type MSTPType = {
  profile: ProfileInfoAboitUserType
}


class MainContentContainer extends React.Component<MainContentPropsType> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(response => {
        debugger;
        this.props.setUserProfile(response.data);
      })

  }

  render() {
    return (
      <MainContent {...this.props} />
    )
  }
}

let mapStateToProps = (state: AppStateType): MSTPType => {
  return {
    profile: state.profilePage.profile,
  }
}
export default connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(MainContentContainer);

