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
        bodypart = Bodypart.find(params[:bodypart_id])
        muscle = bodypart.muscles.create!(muscle_params)
        render json: muscle, status: :created
    end

    def update
        muscle = Muscle.find(params[:id])
        muscle.update!(muscle_params)
        render json: muscle, status: :accepted
    end

    def destroy
        muscle = Muscle.find(params[:id])
        muscle.destroy
        head :no_content
    end

    private

    def muscle_params
        params.permit(:name, :origin, :insertion, :actions, :innervation, :blood_supply, :url, :bodypart_id)
    end
end
