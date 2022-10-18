class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ['firstName'] + ['lastName'] + ['imageUrl'] + ["notYelpUser"]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :city, :state, :image_url, :not_yelp_user)
  end
end
