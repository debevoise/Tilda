class Api::User::LikesController < ApplicationController
    before_action :ensure_logged_in

    def index
        @likes = current_user.likes 
        render 'api/likes/index'
    end
    
end
