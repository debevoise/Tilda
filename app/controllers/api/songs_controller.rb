class Api::SongsController < ApplicationController    

    def show
        @song = Song.find(params[:id]) 
        render :show
    end

    SONGTYPE = 'Song'
    def like
        @like = current_user.likes.new(
            likeable_id: params[:id],
            likeable_type: SONGTYPE
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
            likeable_type: SONGTYPE
        )

        if @like
            @like.destroy
            render 'api/likes/index'
        else
            render json: ['Could not complete your request'], status: 422
        end
    end
end
