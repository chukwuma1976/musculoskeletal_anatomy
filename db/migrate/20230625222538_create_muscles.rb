class CreateMuscles < ActiveRecord::Migration[7.0]
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

      t.timestamps
    end
  end
end
