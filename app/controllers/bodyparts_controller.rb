class BodypartsController < ApplicationController

    def index
        bodyparts = Bodypart.all
        render json: bodyparts, status: :ok
    end

    def show
        bodypart = Bodypart.find(params[:id])
        render json: bodypart, status: :ok
    end

end
