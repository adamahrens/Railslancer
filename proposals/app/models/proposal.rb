# == Schema Information
#
# Table name: proposals
#
#  id                :integer          not null, primary key
#  customer          :string
#  portfolio_url     :string
#  tools             :string
#  estimated_hours   :decimal(, )
#  hourly_rate       :decimal(, )
#  weeks_to_complete :integer
#  client_email      :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Proposal < ApplicationRecord
  validates :customer,
            :portfolio_url,
            :tools,
            :estimated_hours,
            :hourly_rate,
            :weeks_to_complete,
            :client_email, presence: true
end
