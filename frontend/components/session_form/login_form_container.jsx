import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { guestUser } from "../../util/session_form_util";


const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    isSignup: false,
    ownProps
})

const mdp = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),  
    signInAsGuest: () => dispatch(login(guestUser))
})

const LoginFormContainer = connect(msp, mdp)(SessionForm);
export default LoginFormContainer;