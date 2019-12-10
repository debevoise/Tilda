import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';


const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    isSignup: false,
    ownProps
})

const mdp = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

const LoginFormContainer = connect(msp, mdp)(SessionForm);
export default LoginFormContainer;