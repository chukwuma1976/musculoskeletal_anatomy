puts "🌱 Seeding messages..."

Bodypart.destroy_all
Region.destroy_all

bodyparts = [
    {name: "Shoulder and Rotator Cuff"},
    {name: "Chest"},
    {name: "Back"},
    {name: "Arms"},
    {name: "Abdominals"},
    {name: "Glutes"},
    {name: "Quadriceps"},
    {name: "Hamstrings"},
    {name: "Miscellaneous"}
]

bodyparts.each do |bodypart|
    Bodypart.create(name: bodypart[:name])
end

puts 'bodyparts uploaded'

regions = [
    {name: "Skull"},
    {name: "Spine"},
    {name: "Thorax"},
    {name: "Pelvis"},
    {name: "Upper Extremity"},
    {name: "Lower Extremity"}
]

regions.each do |region|
    Region.create(name: region[:name])
end

puts 'regions uploaded'

puts "✅ Done seeding!"