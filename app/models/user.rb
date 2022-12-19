class User < ApplicationRecord
    has_secure_password

    has_many :events
    has_many :requests

    require 'sendgrid-ruby'
        include SendGrid

        def send_email

        from = Email.new(email: 'welcome.privee@gmail.com')
        to = Email.new(email: "#{self.email}")
        subject = 'Welcome to Privee'
        content = Content.new(type: 'text/plain', value: "Welcome #{self.name}, thank you for joining Privee.")
        mail = Mail.new(from, subject, to, content)

        sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers

        end
        

end
