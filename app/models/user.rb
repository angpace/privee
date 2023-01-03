class User < ApplicationRecord
    has_secure_password

    has_many :events
    has_many :requests
    has_many :reviews

    validates :email, uniqueness: true
    validates :name, presence: true 
    validates :password, presence: true

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
        
        def got_a_request (client)
            from = Email.new(email: 'welcome.privee@gmail.com')
            to = Email.new(email: "#{self.email}")
            subject = 'You\'ve recieved a New Request!'
            content = Content.new(type: 'text/plain', 
            value: "Hello #{self.name}! You have received a new request from #{client.name}. Log in now to accept or decline your request.")
            mail = Mail.new(from, subject, to, content)
    
            sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
            response = sg.client.mail._('send').post(request_body: mail.to_json)
            puts response.status_code
            puts response.body
            puts response.headers
    
        end

        def request_accepted (chef)
            from = Email.new(email: 'welcome.privee@gmail.com')
            to = Email.new(email: "#{self.email}")
            subject = "#{chef.name} has accepted your Request!"
            content = Content.new(type: 'text/plain', 
            value: "Hello #{self.name}! #{chef.name} has accepted your request! Happy planning! Thank you for using Priveé.")
            mail = Mail.new(from, subject, to, content)
    
            sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
            response = sg.client.mail._('send').post(request_body: mail.to_json)
            puts response.status_code
            puts response.body
            puts response.headers
        end

        def request_denied (chef)
            from = Email.new(email: 'welcome.privee@gmail.com')
            to = Email.new(email: "#{self.email}")
            subject = "#{chef.name} declined your Request."
            content = Content.new(type: 'text/plain', 
            value: "Hello #{self.name}! #{chef.name} can't fufill your request at this time but don't give up hope! You can send another request out at this time. Thank you for using Priveé.")
            mail = Mail.new(from, subject, to, content)
    
            sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid_api)
            response = sg.client.mail._('send').post(request_body: mail.to_json)
            puts response.status_code
            puts response.body
            puts response.headers

        end

end
