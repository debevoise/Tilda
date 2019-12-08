import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';


const msp = (state) => ({
    errors: state.errors.session,
    formType: 'login',
    isSignup: false,
})

const mdp = (dispatch) => ({
    processForm: user => dispatch(login(user))
})

const LoginFormContainer = connect(msp, mdp)(SessionForm);
export default LoginFormContainer;