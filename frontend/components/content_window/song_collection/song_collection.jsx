import React from 'react';

export default class SongCollection extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchCollection(id);
    }

    render() {
        debugger
        return (
            <div className='song-collection'>
                
                
            </div>
        )
    }
}