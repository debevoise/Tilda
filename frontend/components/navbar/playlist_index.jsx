import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default class PlaylistIndex extends React.Component {



    render() {
        const dummyPlaylists = [
            { name: "Blimp tunes for the overflow masses", id: 2 }, 
            { name: "Blimp tunes for the masses", id: Math.random() }, 
            { name: "Blimp tunes for the masses", id: Math.random() }, 
            { name: "Blimp tunes for the masses", id: Math.random() }, 
            { name: "Blimp tunes for the masses", id: Math.random() },

                        { name: "Blimp tunes for the masses", id: Math.random() }, 
            { name: "Blimp tunes for the masses", id: Math.random() }, 
            { name: "Blimp tunes for the masses", id: Math.random() }, 
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
            { name: "Blimp tunes for the masses", id: Math.random() },
    
        ]
        
        const indexLis = dummyPlaylists.map((playlist, idx) => {
            return <PlaylistIndexItem playlist={playlist} key={idx}/>
        })

        return(
            <div className='playlist-index'>
                <h2>Playlists</h2>

                <ul className='scrollable'>
                    {indexLis}
                </ul>



            </div>
        )
    }
}