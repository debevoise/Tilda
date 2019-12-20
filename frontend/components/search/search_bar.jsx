import React from 'react';
import {search} from '../../actions/search_actions'
import {connect} from 'react-redux'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        let { query } = this.props.match.params;
        (query) ? this.props.search(query) : query = '';
        
        this.state = { query }
        this.updateSearch = this.updateSearch.bind(this);
        this.debouncedSearch = this.debounce(this.props.search, 200)
        this.debounce = this.debounce.bind(this)
    }

    // debouncedSearch(query) {
    //     let {search} = this.props
    //     this.debounce(search, 500)(query);
    // }

    updateSearch(e) {
        e.preventDefault();
        let query = e.currentTarget.value;
        let {search, history} = this.props;
        this.setState({ query })
        history.push('/search/' + query)
        this.debouncedSearch(query);
    }

    debounce(fn, time) {
        let timeout;
        
        return (...args) => {
            // let context = this;

            let cb = () => {
                timeout = null;
                fn(...args)
            }

            clearTimeout(timeout);
            timeout = setTimeout(cb, time);
        }
    }

    render() {
        // const debouncedUpdate = _.debounce(this.updateSearch, 1000)
        const clearButton = this.state.query.length > 0 ? (
          <span onClick={() => this.setState({query: ''})}>
            <i className="material-icons">close</i>
          </span>
        ) : null;

        return (
            <div className='search-bar'>
                <span>
                    <i className="material-icons">
                        search
                    </i>
                </span>
                <input 
                    type="text"
                    onChange={this.updateSearch}
                    value={this.state.query}
                    placeholder='Search for Artists, Songs, or Playlists'/>
                {clearButton}
            </div>  
        )
    }
}

const msp = (props, ownProps) => {
    return {}
}

const mdp = dispatch => ({
    search: query => dispatch(search(query))
})

export default connect(msp, mdp)(SearchBar);