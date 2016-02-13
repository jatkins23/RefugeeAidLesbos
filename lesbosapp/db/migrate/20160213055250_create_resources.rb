class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :name
      t.string :location
      t.string :website
      t.string :phone
      t.string :hours
      t.integer :price
      t.string :category
      t.boolean :proof_required

      t.timestamps null: false
    end
  end
end
