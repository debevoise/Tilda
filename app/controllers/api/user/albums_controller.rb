class Api::User::AlbumsController < ApplicationController
    before_action :ensure_logged_in
    ALBUM_TYPE = 'Album'

    def index
        @albums = current_user.albums
        render 'api/albums/index'
    end

    def post
        @like = current_user.likes.new(
            likeable_id: params[:id],
            likeable_type: ALBUM_TYPE
        )

        if @like.save
            render json: {}, status: 200
        else
            render json: ['Already liked this song'], status: 422
        end
    end

    def destroy
        @like = current_user.likes.find_by(
            likeable_id: params[:id],
            likeable_type: ALBUM_TYPE
        )

        if @like
            @like.destroy
            render json: {}, status 200
        else
            render json: ['You don\'t like this song'], status: 422
        end

    end
end
