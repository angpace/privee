class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :amount_of_people
      t.date :date
      t.string :description
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
