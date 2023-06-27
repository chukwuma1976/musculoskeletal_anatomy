class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize
  
    def current_user
      User.find_by(id: session[:user_id])
    end
    
    private
  
    def render_not_found(exception)
      render json: { error: "#{exception.model} not found" }, status: :not_found
    end
  
    def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
    def authorize
      return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
