class AddColumnToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :date, :string
  end
end
