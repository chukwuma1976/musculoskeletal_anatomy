# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_03_202632) do

  create_table "bodyparts", force: :cascade do |t|
    t.string "name"
  end

  create_table "bones", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "url"
    t.integer "region_id"
  end

  create_table "muscles", force: :cascade do |t|
    t.string "name"
    t.string "origin"
    t.string "insertion"
    t.string "action"
    t.string "innervation"
    t.string "blood_supply"
    t.string "url"
    t.integer "bodypart_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
  end

end
