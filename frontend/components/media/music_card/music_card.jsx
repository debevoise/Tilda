import React from 'react'
import {Link} from 'react-router-dom'
import { generateGradient } from '../../../util/color_util';

const MusicCard = props => {
    let name;
    let owner;
    let style = { backgroundImage: generateGradient() }
    let artwork = <div className="music-card-artwork" style={style}></div>;
    
    switch (props.cardtype) {
        case 'playlist':
            name = props.musicItem.name;
            owner = 'Playlist';
            break;
        case 'album':
            name = props.musicItem.title;
            owner = props.owner.name;
            artwork = (
              <img
                src={props.musicItem.artwork}
                alt="album-art"
                className="music-card-artwork"
              />
            );
            break;
        case 'artist':
            name = props.musicItem.name;
            owner = 'Artist'
            break;
        default:
            name = '';
            owner = 'Music'
            break;
    }

    

    return (
      <Link to={`/${props.cardtype + 's'}/${props.musicItem.id}`}>
        <li className="music-card">
          {artwork}
          <div className="music-card-details">
            <span className='mc-name'>{name}</span>
            <span className='mc-owner'>{owner}</span>
          </div>
          <div className="play-icon">
            <i className="material-icons">play_arrow</i>
          </div>
        </li>
      </Link>
    );
}

export default MusicCard;