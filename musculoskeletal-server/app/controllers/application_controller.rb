class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get '/bodypart' do
      bodyparts = BodyPart.all.order(name: :asc)
      bodyparts.to_json
    end
    
    get '/regions' do
      regions = Region.all.order(name: :asc)
      regions.to_json
    end
    
  end