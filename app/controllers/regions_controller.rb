class RegionsController < ApplicationController

    def index
        regions = Region.all
        render json: regions, status: :ok
    end

    def show
        region = Region.find(params[:id])
        render json: region, status: :ok
    end

    def create
        region = Region.create!(region_params)
        render json: region, status: :created
    end

    def update
        region = Region.find(params[:id])
        region.update!(region_params)
        render json: region, status: :updated
    end

    def destroy
        region = Region.find(params[:id])
        region.destroy
        head :no_content
    end

    private

    def region_params
        params.permit(:name)
    end

end
