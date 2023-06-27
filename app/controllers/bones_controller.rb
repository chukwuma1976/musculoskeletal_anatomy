class BonesController < ApplicationController

    def index
        bones = current_user.bones.order(:name)
        render json: bones, status: :ok
    end

    def show
        bone = current_user.bones.find(params[:id])
        render json: bone, status: :ok
    end

    def create
        region = current_user.regions.find(params[:region_id])
        bone = region.bones.create!(bone_params)
        render json: bone, status: :created
    end

    def update
        bone = current_user.bones.find(params[:id])
        bone.update!(bone_params)
        render json: bone, status: :accepted
    end

    def destroy
        bone = current_user.bones.find(params[:id])
        bone.destroy
        head :no_content
    end

    private

    def bone_params
        params.permit(:name, :description, :url, :region_id, :user_id)
    end

end
