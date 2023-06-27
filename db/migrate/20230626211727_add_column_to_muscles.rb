class AddColumnToMuscles < ActiveRecord::Migration[7.0]
  def change
    add_column :muscles, :user_id, :integer
  end
end
