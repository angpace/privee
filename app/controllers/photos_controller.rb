class PhotosController < ApplicationController

    def index
        render json: Photo.all
    end

end
