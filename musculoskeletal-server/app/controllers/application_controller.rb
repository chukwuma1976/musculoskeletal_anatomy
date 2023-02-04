class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # get requests
    get '/bodyparts' do
      bodyparts = Bodypart.all
      bodyparts.to_json
    end

    get '/bodyparts/:name' do
      bodyparts = Bodypart.find_by(params[:name]).muscles
      bodyparts.to_json
    end
    
    get '/regions' do
      regions = Region.all
      regions.to_json
    end

    get '/regions/:name' do
      regions = Region.find_by(params[:name]).bones
      regions.to_json
    end

    get '/muscles' do
      muscles = Muscle.all.order(:name)
      muscles.to_json
    end

    get '/muscles/:name' do
      muscle = Muscle.find_by(params[:name])
      muscle.to_json
    end

    get '/bones' do
      bones =Bones.all.order(:name)
      bones.to_json
    end

    get '/bones/:name' do
      bone = Bone.find_by(params[:name])
      bone.to_json
    end

    # post requests
    post '/muscles/:id' do
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

    post '/bones/:id' do
      new_bone = Bone.create(
        name: params[:name],
        description: params[:description],
        url: params[:url],
        region_id: params[region_id]
      )  
      new_bone.to_json    
    end

    #patch requests
    post '/muscles/:id' do

    end
    
  end