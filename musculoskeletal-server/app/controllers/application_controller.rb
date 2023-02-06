class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # READ
    get '/bodyparts' do
      bodyparts = Bodypart.all
      bodyparts.to_json
    end

    get '/bodyparts/:name' do
      bodyparts = Bodypart.find_by(name: params[:name]).muscles
      bodyparts.to_json
    end

    get '/regions' do
      regions = Region.all
      regions.to_json
    end

    get '/regions/:name' do
      regions = Region.find_by(name: params[:name]).bones
      regions.to_json
    end

    get '/muscles' do
      muscles = Muscle.all.order(:name)
      muscles.to_json
    end

    get '/muscles/names' do
      muscles = Muscle.all.order(:name).pluck(:name, :id)
      muscles.to_json
    end

    get '/muscles/:name' do
      muscle = Muscle.find_by(name: params[:name])
      muscle.to_json
    end

    get '/muscles/:id' do
      muscle = Muscle.find_by(id: params[:id])
      muscle.to_json
    end

    get '/bones' do
      bones =Bone.all.order(:name)
      bones.to_json
    end

    get '/bones/names' do
      bones =Bone.all.order(:name).pluck(:name, :id)
      bones.to_json
    end

    get '/bones/:name' do
      bone = Bone.find_by(name: params[:name])
      bone.to_json
    end

    get '/bones/:id' do
      bone = Bone.find_by(id: params[:id])
      bone.to_json
    end

    # CREATE
    post '/muscles' do
      new_muscle = Muscle.create(
        name: params[:name], 
        origin: params[:origin], 
        insertion: params[:insertion], 
        action: params[:action], 
        innervation: params[:innervation], 
        blood_supply: params[:blood_supply], 
        url: params[:url],
        bodypart_id: params[:bodypart_id]
        )
      new_muscle.to_json
    end

    post '/bones' do
      new_bone = Bone.create(
        name: params[:name],
        description: params[:description],
        url: params[:url],
        region_id: params[region_id]
      )  
      new_bone.to_json    
    end

    #UPDATE
    patch '/muscles/:id' do
      updated_muscle = Muscle.find_by(id: params[:id])
      updated_muscle.update(
        origin: params[:origin], 
        insertion: params[:insertion], 
        action: params[:action], 
        innervation: params[:innervation], 
        blood_supply: params[:blood_supply]
      )
      updated_muscle.to_json
    end

    patch '/bones/:id' do
      updated_bone = Bone.find_by(id: params[:id])
      updated_bone.update(description: params[:description])
      updated_bone.to_json
    end

    #DELETE
    delete '/muscles/:id' do
      muscle = Muscle.find_by(id: params[:id])
      muscle.destroy
      muscle.to_json
    end

    delete '/bones/:id' do
      bone = Bone.find_by(id: params[:id])
      bone.destroy
      bone.to_json
    end

  end