class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :text, null: false
      t.integer :food_rating, null: false
      t.integer :service_rating, null: false
      t.boolean :useful, default: false, null: false
      t.boolean :funny, default: false, null: false
      t.boolean :cool, default: false, null: false
      t.string :photos_url
      t.timestamps
    end
    add_reference :reviews, :author, index: true, foreign_key: { to_table: :users }
    add_reference :reviews, :business, index: true, foreign_key: true
  end
end
