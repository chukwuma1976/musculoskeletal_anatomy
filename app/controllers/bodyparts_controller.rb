class BodypartsController < ApplicationController

    def index
        bodyparts = Bodypart.all
        render json: bodyparts, status: :ok
    end

    def show
        bodypart = Bodypart.find(params[:id])
        render json: bodypart, status: :ok
    end

    def create
        bodypart = Bodypart.create!(bodypart_params)
        render json: bodypart, status: :created
    end

    def update
        bodypart = Bodypart.find(params[:id])
        bodypart.update!(bodypart_params)
        render json: bodypart, status: :updated
    end

    def destroy
        bodypart = Bodypart.find(params[:id])
        bodypart.destroy
        head :no_content
    end

    private

    def bodypart_params
        params.permit(:name)
    end

end
