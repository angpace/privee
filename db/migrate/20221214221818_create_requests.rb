class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.integer :event_id
      t.integer :client_id
      t.integer :chef_id

      t.timestamps
    end
  end
end
