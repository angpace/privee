class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.bigint :phone
      t.string :image
      t.boolean :is_a_chef
      t.string :cuisine
      t.string :last_job

      t.timestamps
    end
  end
end
