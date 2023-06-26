class ChangeActionToActionsInMuscles < ActiveRecord::Migration[7.0]
  def change
    rename_column :muscles, :action, :actions
  end
end
