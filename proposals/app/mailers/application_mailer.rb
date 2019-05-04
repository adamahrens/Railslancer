class ApplicationMailer < ActionMailer::Base
  default from: 'mailerbot@railslancer.com'
  layout 'mailer'
end
