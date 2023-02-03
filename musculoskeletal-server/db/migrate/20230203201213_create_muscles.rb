class CreateMuscles < ActiveRecord::Migration[6.1]
  def change
    create_table :muscles do |t|
      t.string :name
      t.string :origin
      t.string :insertion 
      t.string :action 
      t.string :innervation 
      t.string :blood_supply
      t.string :url
      t.integer :bodypart_id
    end
  end
end
