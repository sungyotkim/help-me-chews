# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  diet_preference :string           default("None"), not null
#  city            :string           not null
#  state           :string           not null
#  image_url       :string
#  not_yelp_user   :boolean          default(TRUE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, length: { in: 3..255 }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :first_name, :last_name, :city, :state, presence: true
  validates :not_yelp_user, inclusion: { in: [true, false] }

  before_validation :ensure_session_token

  has_many :reviews,
    foreign_key: :author_id,
    dependent: :destroy

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user&.authenticate(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    return token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token  
  end
end
