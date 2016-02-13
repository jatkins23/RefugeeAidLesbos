class AddLatLngToResources < ActiveRecord::Migration
  def change
    add_column :resources, :lat, :float
    add_column :resources, :lng, :float
  end
end
