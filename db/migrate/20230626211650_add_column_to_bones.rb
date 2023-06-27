class AddColumnToBones < ActiveRecord::Migration[7.0]
  def change
    add_column :bones, :user_id, :integer
  end
end
