require 'faker'

35.times do
  tools = Faker::ProgrammingLanguage.name.to_s
  more = rand(1..6)
  more.times do
    tools += ", #{Faker::ProgrammingLanguage.name}"
  end

  Proposal.create!(customer: Faker::Company.name,
                   portfolio_url: Faker::Company.logo,
                   tools: tools,
                   estimated_hours: rand(40..100),
                   hourly_rate: rand(11.2...76.9).round(2),
                   weeks_to_complete: rand(1..20),
                   client_email: Faker::Internet.email)
end
