class ChangeBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :yelp_info, :json, default: {}
  end
end
