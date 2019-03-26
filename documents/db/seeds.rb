# frozen_string_literal: true

require 'faker'

23.times do
  Indenture.create!(title: Faker::Company.name,
                    description: Faker::Company.bs,
                    image_url: Faker::Company.logo,
                    file_url: 'https://docs.google.com/document/d/1gVgtVKJlhABGqtbloAMzx8-y_DGw4f2DaB_zgs9wdOc/edit?usp=sharing')
end
