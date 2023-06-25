class CreateBones < ActiveRecord::Migration[7.0]
  def change
    create_table :bones do |t|
      t.string :name
      t.string :description
      t.string :url
      t.integer :region_id

      t.timestamps
    end
  end
end
