class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :diet_preference, default: "None", null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :image_url
      t.boolean :not_yelp_user, default: true, null: false 
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
