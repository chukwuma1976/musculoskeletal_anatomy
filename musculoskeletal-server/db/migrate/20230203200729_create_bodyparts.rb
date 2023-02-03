class CreateBodyparts < ActiveRecord::Migration[6.1]
  def change
    create_table :bodyparts do |t|
      t.string :name 
    end
  end
end
