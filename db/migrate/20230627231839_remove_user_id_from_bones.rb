class RemoveUserIdFromBones < ActiveRecord::Migration[7.0]
  def change
    remove_column :bones, :user_id, :integer
  end
end
