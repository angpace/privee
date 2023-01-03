class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.integer :rating
      t.integer :client_id
      t.integer :chef_id
      t.integer :event_id

      t.timestamps
    end
  end
end
