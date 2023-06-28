class RemoveUserIdFromMuscles < ActiveRecord::Migration[7.0]
  def change
    remove_column :muscles, :user_id, :integer
  end
end
