# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

water = Resource.create(name:"Water Fountain", location:"100 Main St.", website:"www.water.com", phone:123456910, hours: "8PM-10PM", price: "100", category: "water")