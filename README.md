# Tilda~

Tilda is an online music streaming platform modeled after Spotify. Users can search for new music, add songs, artists, and albums to their libraries, and create and edit playlists, all while enjoying uninterrupted audio playback. [See Tilda for yourself here](https://www.tilda-music.herokuapp.com). 

Tilda is built with a Ruby on Rails and PostgreSQL backend and uses React/Redux to deliver a dynamic frontend user experience. 


## Continuous Music playback

```html
<audio id='audio-player'
    autoPlay
    onEnded={this.playNextSong}
    onTimeUpdate={this.getCurrentTime}
    src={currentSong.songFile}
    ref={audio => this.audio = audio}
    >
</audio>
```

To achieve continuous music playback, I nested an html audio element in the root component of my media player to avoid re-renders on state change. Using React's 'refs', I could access the `<audio>` tag as an instance variable in my Playback component and manipulate audio control playback through its api. 

While this made play/pause functionality simple, I had to engineer a clever may to switch between songs in a collection of tracks. That meant taking into consideration songs that a user may have added to his or her personal queue and whether there was another song to play at all. 

```javascript
playNextSong() {
    let { history, currentSong, playerQueue, userQueue, active } = this.state
    if (currentSong.id) history.push(currentSong);

    if (userQueue.length !== 0) {
        currentSong = userQueue.shift()
    } else if (playerQueue.length !== 0) {
        currentSong = playerQueue.shift()
    } else {
        active = false;
        currentSong = {};
    }

    this.audio.currentTime = 0;
    this.setState({
        currentTime: 0,
        history,
        currentSong,
        playerQueue,
        userQueue,
        active
    })
}
```

### Audio Player

![Audio Player](https://media.giphy.com/media/f8aPdCmEMG4ynHTeWh/giphy.gif)



## Frontend and Backend User Auth

On my signup and login pages, I use frontend input validations to ensure that all fields meet signup requirements. Users cannot submit a signup form unless all validations are met. On submission, my user model checks that all fields are met and checks if an email has already been taken. Passwords are salted and hashed using BCrypt and are never saved as plain text. 

```ruby

class User < ApplicationRecord
    include BCrypt
    attr_reader :password

    validates :name, :email, :password_digest, :session_token, :birth_date, presence: true
    validates :gender, inclusion: { in: %w(male female non-binary) }
    validates :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 8 }, allow_nil: true
    after_initialize :ensure_session_token

    # cont...
end

```

### Example of Sign Up and Frontend Validations

![Sign up page](https://media.giphy.com/media/LRqmrGK4tw0hhjRwta/giphy.gif)



## Creating and Editing Playlists

Tilda features an interactive way to create playlists and add songs to them. As users browse albums or playlists, they can open a dropdown from a song link and select 'Add to Playlist' which opens a modal of a user's authored playlists. 

### Creating playlists

![Creating Playlists](https://media.giphy.com/media/QBjaZXa0SdT3HqHfiz/giphy.gif)

### Adding songs to playlists

![Adding Song to Playlist](https://media.giphy.com/media/J6DOu1wyFyiMDWTBzk/giphy.gif)


## Search 

Tilda's search bar features real time search results as users type, with a debounced input field to prevent excessive requests to the backend.

![Search](https://media.giphy.com/media/lS6pMsfj7E5sQTlgwB/giphy.gif)

```jsx
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

    updateSearch(e) {
        e.preventDefault();
        let query = e.currentTarget.value;
        let { history} = this.props;
        this.setState({ query })
        history.push('/search/' + query)
        this.debouncedSearch(query);
    }

    debounce(fn, time) {
        let timeout;
        
        return (...args) => {
            let cb = () => {
                timeout = null;
                fn(...args)
            }

            clearTimeout(timeout);
            timeout = setTimeout(cb, time);
        }
    }

    // Cont...
}
```
