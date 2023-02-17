class ApplicationController < Sinatra::Base

    set :default_content_type, 'application/json'
    
    # READ
    get '/bodyparts' do
      bodyparts = Bodypart.all
      bodyparts.to_json
    end

    get '/bodyparts/:id' do
      bodypart = Bodypart.find_by(id: params[:id])
      bodypart.to_json(include: :muscles)
    end

    get '/regions' do
      regions = Region.all
      regions.to_json
    end

    get '/regions/:id' do
      region = Region.find_by(id: params[:id])
      region.to_json(include: :bones)
    end

    get '/muscles' do
      muscles = Muscle.all.order(:name)
      muscles.to_json
    end

    get '/muscles/:id' do
      muscle = Muscle.find_by(id: params[:id])
      muscle.to_json
    end

    get '/bones' do
      bones =Bone.all.order(:name)
      bones.to_json
    end

    get '/bones/:id' do
      bone = Bone.find_by(id: params[:id])
      bone.to_json
    end

    # CREATE
    post '/muscles' do
      new_muscle = Muscle.create(params)
      new_muscle.to_json
    end

    post '/bones' do
      new_bone = Bone.create(params)
      new_bone.to_json    
    end

    post '/bodyparts' do
      new_bodypart = Bodypart.create(name: params[:name])
      new_bodypart.to_json
    end

    post '/regions' do
      new_region = Region.create(name: params[:name])
      new_region.to_json
    end

    post '/bodyparts/:id/muscles' do
      new_muscle = Bodypart.find(params[:id]).muscles.create(params)
      new_muscle.to_json
    end

    post '/regions/:id/bones' do
      new_bone = Region.find(params[:id]).bones.create(params)
      new_bone.to_json    
    end

    #UPDATE
    patch '/muscles/:id' do
      updated_muscle = Muscle.find_by(id: params[:id])
      updated_muscle.update(params)
      updated_muscle.to_json
    end

    patch '/bones/:id' do
      updated_bone = Bone.find_by(id: params[:id])
      updated_bone.update(params)
      updated_bone.to_json
    end

    #DELETE
    delete '/muscles/:id' do
      muscle = Muscle.find(params[:id])
      muscle.destroy
      muscle.to_json
    end

    delete '/bones/:id' do
      bone = Bone.find(params[:id])
      bone.destroy
      bone.to_json
    end

    delete '/bodyparts/:id' do
      bodypart = Bodypart.find(params[:id])
      bodypart.destroy
      bodypart.to_json
    end

    delete '/regions/:id' do
      region = Region.find(params[:id])
      region.destroy
      region.to_json
    end

  end