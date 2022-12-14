class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.integer :amount_of_people
      t.integer :user_id
      t.string :description

      t.timestamps
    end
  end
end
