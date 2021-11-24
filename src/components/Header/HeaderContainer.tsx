import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserDataActionCreator, InitialUserAuthDataType } from '../../redux/auth-reduser';
import { AppStateType } from '../../redux/reduxStore';

type MDTPType = {
    setUserData: (data: InitialUserAuthDataType) => void
}
type MSTPType = {
    isAuth: boolean
    login: string | null
}

export class HeaderContainer extends React.Component<MDTPType & MSTPType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                }
            })
    }

    render() {
        return (
            <div style={{ gridArea: 'h' }}>
                <Header  {...this.props} />
            </div>

        )
    }
}
let MapStateToProps = (state: AppStateType): any => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
} //any type!!!

export default connect<MSTPType, MDTPType, {}, AppStateType>(MapStateToProps, { setUserData: setUserDataActionCreator })(HeaderContainer);