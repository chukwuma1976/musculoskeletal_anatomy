class MusclesController < ApplicationController
    def index
        muscles = Muscle.all.order(:name)
        render json: muscles, status: :ok
    end

    def show
        muscle = Muscle.find(params[:id])
        render json: muscle, status: :ok
    end

    def create
        muscle = Muscle.create!(muscle_params)
        render json: muscle, status: :created
    end

    def update
        muscle = Muscle.find(params[:id])
        muscle.update!(muscle_params)
        render json: muscle, status: :updated
    end

    def destroy
        muscle = Muscle.find(params[:id])
        muscle.destroy
        head: :no_content
    end

    private

    def muscles_params
        params.permit(:name, :origin, :insertion, :action, :innervation, :blood_supply, :url, :bodypart_id)
    end
end
