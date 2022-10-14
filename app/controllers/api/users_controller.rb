class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ['firstName'] + ['lastName'] + ['dietPreference']

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :diet_preference, :zipcode)
  end
end
