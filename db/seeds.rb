puts "Seeding data!"

User.destroy_all
Event.destroy_all

#Chefs 
 angela = User.create(name: "Angela Pace", email: "angelapaceaustralia@gmail.com", password: "123456",
 phone: 7187027031, image: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn", is_a_chef: true,
 cuisine: "French Pastry", last_job: "Eleven Madison Park")
 kevin = User.create(name: "Kevin Martinetti", email: "martinettikevin@gmail.com", password: "123456",
 phone: 9293219438, image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: true,
 cuisine: "Modern French", last_job: "Le Luna")
 nick = User.create(name: "Nicholas Pace", email: "nickpace529@gmail.com", password: "123456" ,
phone: 7187026960, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvJJvmxR8KuDQ86rWZinm1wRZD-c058ckPwxcapMu1QR3FGbZtdM4OJ2zCjM6Hhklb0g&usqp=CAU", is_a_chef: true,
 cuisine: "Japanese", last_job: "Mission Sandwhich")

 #Clients
 sylvia = User.create(name: "Sylvia Cosentino", email: "asylviapace@yahoo.com", phone: 6467531798, 
 image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: false, password: "123456",)
 nori = User.create(name: "Nori Pace" , email: "woof@woof.com", phone: 1110001010, 
 image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: false, password: "123456")
 grandma = User.create(name: "Kathy Pace" , email: "ldydiamond56@yahoo.com", phone: 2017885045, 
 image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: false, password: "123456")

#Events
angela27 = Event.create(title: "Angelas Bday Bash", amount_of_people: 10, user_id: sylvia.id, description: "I want to throw a party for my favorite daughter!", date: "September 11th, 2023")
kevin27 = Event.create(title: "Kevins Surprise Party", amount_of_people: 4, user_id: nori.id, description: "I love my dad and I am going to throw him a party.", date: "September 3rd, 2023")
christmas = Event.create(title: "Jesus Born", amount_of_people: 13, user_id: nori.id, description: "Jesus has risen ya'lll!!!!", date: "December 25th, 2022")
newyears = Event.create(title: "New Year, New Us", amount_of_people: 30, user_id: sylvia.id, description: "2023!!!", date: "December 31st, 2022")
# # birthday = Event.create(name: "Birthday Bash", amount_of_people: 10, date: "Sept. 11, 2023", description: "Looking for japanese cuisine and a small plates! Sushi would be a plus!", client: nori)
puts "Data seeded!"

#Requests 
first = Request.create(event_id: angela27.id, client_id: sylvia.id, chef_id: angela.id, accepted: false)