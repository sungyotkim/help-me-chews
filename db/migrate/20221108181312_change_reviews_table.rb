class ChangeReviewsTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :image_url
  end
end
