class Api::ArtistsController < ApplicationController
    ARTISTTYPE = 'Artist'
    
    def show
        @artist = Artist.includes(:albums).find(params[:id])
        render :show
    end

    def like
        @like = current_user.likes.new(
            likeable_id: params[:id],
            likeable_type: ARTISTTYPE
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
            likeable_type: ARTISTTYPE
        )

        if @like
            @like.destroy
            render 'api/likes/index'
        else
            render json: ['Could not complete your request'], status: 422
        end
    end

end
