# == Schema Information
#
# Table name: indentures
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  description :string
#  file_url    :text
#  image_url   :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Indenture < ApplicationRecord
end
