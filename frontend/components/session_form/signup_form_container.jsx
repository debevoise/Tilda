import SessionForm from "./session_form";
import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/session_actions";

const msp = (state) => ({
  errors: state.errors.session,
  formType: "signup",
  isSignup: true,
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

const SignupFormContainer = connect(msp, mdp)(SessionForm);
export default SignupFormContainer;
