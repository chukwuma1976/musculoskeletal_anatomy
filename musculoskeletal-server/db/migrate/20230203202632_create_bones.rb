class CreateBones < ActiveRecord::Migration[6.1]
  def change
    create_table :bones do |t|
      t.string :name
      t.string :description
      t.string :url
      t.integer :region_id
    end
  end
end
