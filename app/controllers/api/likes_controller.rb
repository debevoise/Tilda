class Api::LikesController < ApplicationController
    before_action :ensure_logged_in

    def index
        @likes = current_user.likes 
    end
    
end
