class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :yelp_id, null: false
      t.timestamps
    end
    add_index :businesses, :yelp_id, unique: true
  end
end
