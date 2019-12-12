class Api::SongsController < ApplicationController    
    def show
        @song = Song.find(params[:id]) 
        render :show
    end

    def like

    end

    def unlike
        
    end
end
