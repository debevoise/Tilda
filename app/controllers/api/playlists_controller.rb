class Api::PlaylistsController < ApplicationController
    before_action :ensure_logged_in, except: [:show]
    PLAYLISTTYPE = 'Playlist'    
                                                                                                            
    def create
        @playlist = current_user.authored_playlists.new(playlist_params)

        if @playlist.save 
            render 'api/playlists/show'
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def index
        @playlists = current_user.authored_playlists
        render 'api/playlists/index'
    end

    def update
        @playlist = current_user.playlists.find(params[:id])
        @playlist.update(playlist_params)

        if @playlist.save
            render 'api/playlist/show'
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
        render 'api/playlists/show'
    end

    def add
        @playlist = current_user.authored_playlists.find(params[:id])
        song = Song.find(params[:songId])
        if @playlist && song
            @playlist.add_song(song)
            render 'api/playlists/show'
        else
            render json: [ 'Something went wrong...' ], status: 422
        end
    end
    

    def remove
        @playlist = current_user.authored_playlists.find(params[:id])
        ps = @playlist.playlist_songs.find_by(song_id: params[:songId])
        if ps
            ps.destroy
            render 'api/playlists/show'
        else
            render json: [ 'Something went wrong...' ], status: 422
        end

    end

    def like 
        @like = current_user.likes.new(
            likeable_id: params[:id],
            likeable_type: PLAYLISTTYPE
        )

        if @like.save
            render 'api/likes/show'
        else
            render json: ['Could not complete your request'], status: 422
        end
    end

    def unlike
        @like = current_user.likes.find_by(
            likeable_id: params[:id],
            likeable_type: PLAYLISTTYPE
        )

        if @like
            @like.destroy
            render 'api/likes/show'
        else
            render json: ['Could not complete your request'], status: 422
        end
    end


    private
    def playlist_params
        params.require(:playlist).permit(:name)
    end
end
