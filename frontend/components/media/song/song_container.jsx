import { connect } from 'react-redux';
import Song from './song'

const msp = (state, ownprops) => ({
    type: 'Song'
})

const mdp = dispatch => ({

})

const SongContainer = connect(msp, mdp)(Song);
export default SongContainer;