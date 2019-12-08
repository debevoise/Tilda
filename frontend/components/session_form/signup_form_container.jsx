import SessionForm from "./session_form";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: "signup",
  isSignup: true,
});

const mdp = dispatch => ({
  processForm: user => dispatch(signup(user))
});

const SignupFormContainer = connect(msp, mdp)(SessionForm);
export default SignupFormContainer;
