# Tilda~

Tilda is an online music streaming platform modeled after Spotify. Users can search for new music, add songs, artists, and albums to their libraries, and create and edit playlists, all while enjoying uninterrupted audio playback. See Tilda for yourself [here](https://www.tilda-music.herokuapp.com).

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




