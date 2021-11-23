import MainContent from './MainContent'
import React from 'react';
import axios from 'axios';
import { setUserProfileActionCreator } from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';
import { connect } from 'react-redux';
import { ProfileInfoAboitUserType } from './MainInfo/MainInfo';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type MainContentPropsType = MDTPType & MSTPType

type PropsForWithRouterType = RouteComponentProps<ParamsType> & MainContentPropsType

type ParamsType = {
  userID: string | undefined
}
type MDTPType = {
  setUserProfile: (profile: ProfileInfoAboitUserType) => void
}
type MSTPType = {
  profile: ProfileInfoAboitUserType
}

class MainContentContainer extends React.Component<PropsForWithRouterType> {
  componentDidMount() {
    if (!this.props.match.params.userID) {
      this.props.match.params.userID = '2';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userID}`)
      .then(response => {
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
let whithURLDataContainerComponent = withRouter(MainContentContainer)

export default connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(whithURLDataContainerComponent);

