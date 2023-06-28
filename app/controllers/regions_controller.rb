class RegionsController < ApplicationController

    def index
        regions = Region.all
        render json: regions, status: :ok
    end

    def show
        region = Region.find(params[:id])
        render json: region, status: :ok
    end

end
