import React from 'react';

const ArtistBio = (props) => {
    return (
        <section className='artist-bio'>
            <h2>Biography</h2>
            <p>{props.bio}</p>
        </section>
    )
}

export default ArtistBio;