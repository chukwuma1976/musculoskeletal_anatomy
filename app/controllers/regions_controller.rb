class RegionsController < ApplicationController

    def index
        regions = current_user.regions.uniq
        render json: regions, status: :ok
    end

    def show
        region = current_user.regions.find(params[:id])
        render json: region, status: :ok
    end

end
