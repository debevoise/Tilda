class Api::PlaylistsController < ApplicationController
    before_action :ensure_logged_in, except: [:show]
    PLAYLISTTYPE = 'Playlist'    

    def create
        @playlist = current_user.playlists.new(playlist_params)

        if @playlist.save 
            render 'api/playlists/playlist'
        else
            render json: ['Could not create playlist'], status: 422
        end
    end

    def update
        @playlist = current_user.playlists.find(params[:id])
        @playlist.update(playlist_params)

        if @playlist.save
            render 'api/playlist/playlist'
        else
            render json: ['Could not update playlist'], status: 422
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
        render 'api/playlist/playlist'
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
            render 'api/likes/likes'
        else
            render json: ['Could not complete your request'], status: 422
        end
    end


    private
    def playlist_params
        params.require(:playlist).permit(:name)
    end
end
