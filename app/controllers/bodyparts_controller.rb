class BodypartsController < ApplicationController

    def index
        bodyparts = current_user.bodyparts.uniq
        render json: bodyparts, status: :ok
    end

    def show
        bodypart = current_user.bodyparts.find(params[:id])
        render json: bodypart, status: :ok
    end

end
