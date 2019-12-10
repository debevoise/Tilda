import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';

const msp = (state) => {
    let { id } = state.session
    let currentUser = id ? state.entities.users[id] : {}
    return {
        currentUser 
    }
}

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

const GreetingContainer = connect(msp, mdp)(Greeting);
export default GreetingContainer;
