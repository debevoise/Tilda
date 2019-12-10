import SessionForm from "./session_form";
import { connect } from "react-redux";
import { signup, clearSessionErrors, login } from "../../actions/session_actions";
import { guestUser } from '../../util/session_form_util';

const msp = (state) => ({
  errors: state.errors.session,
  formType: "signup",
  isSignup: true,
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  signInAsGuest: () => dispatch(login(guestUser))
});

const SignupFormContainer = connect(msp, mdp)(SessionForm);
export default SignupFormContainer;
