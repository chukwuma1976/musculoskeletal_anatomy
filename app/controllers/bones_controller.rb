class BonesController < ApplicationController

    def index
        bones = Bone.all.order(:name)
        render json: bones, status: :ok
    end

    def show
        bone = Bone.find(params[:id])
        render json: bone, status: :ok
    end

    def create
        region = Region.find(params[:region_id])
        bone = region.bones.create!(bone_params)
        render json: bone, status: :created
    end

    def update
        bone = Bone.find(params[:id])
        bone.update!(bone_params)
        render json: bone, status: :accepted
    end

    def destroy
        bone = Bone.find(params[:id])
        bone.destroy
        head :no_content
    end

    private

    def bone_params
        params.permit(:name, :description, :url, :region_id)
    end

end
