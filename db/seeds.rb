puts "Seeding data!"

User.destroy_all
Event.destroy_all
Photo.destroy_all

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
 yuzu = User.create(name: "Yuzu Johnson", email: "chef@gmail.com", password: "123456",
 phone: 7187027031, image: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn", is_a_chef: true,
 cuisine: "Japanese", last_job: "Mira Sushi")
 edward = User.create(name: "Edward Cullen", email: "superchef@gmail.com", password: "123456",
 phone: 7187027031, image: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn", is_a_chef: true,
 cuisine: "Korean", last_job: "Jeung Sek")

 #Clients
 sylvia = User.create(name: "Sylvia Cosentino", email: "asylviapace@yahoo.com", phone: 6467531798, 
 image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: false, password: "123456",)
 nori = User.create(name: "Nori Pace" , email: "woof@woof.com", phone: 1110001010, 
 image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: false, password: "123456")
 grandma = User.create(name: "Kathy Pace" , email: "ldydiamond56@yahoo.com", phone: 2017885045, 
 image: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg", is_a_chef: false, password: "123456")

#Events
angela27 = Event.create(title: "Angela's Birthday Surprise", amount_of_people: 10, user_id: sylvia.id, description: "My daughter loves Japanese food. I would love to potentially have Sushi, maybe some small warm bites to start- but mainly sushi!", date: "September 11th, 2023", cuisine: "Japanese")
kevin27 = Event.create(title: "Cake and Champagne", amount_of_people: 4, user_id: sylvia.id, description: "Hello! Im looking for a Chef that would be able to recreate an experience I had at Cakes and Bubbles in London. Small cakes and petit fours.", date: "September 3rd, 2023", cuisine: "French")
newyears = Event.create(title: "New Year, New Us", amount_of_people: 30, user_id: sylvia.id, description: "2023!!! Looking for small bites, potentially with French influence?", date: "December 31st, 2022", cuisine: "French")

# # birthday = Event.create(name: "Birthday Bash", amount_of_people: 10, date: "Sept. 11, 2023", description: "Looking for japanese cuisine and a small plates! Sushi would be a plus!", client: nori)

#Gallery 
sophie  = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055911874266402907/Sophie.JPEG?width=762&height=955", description: "Chef Sophie Hau")
tart = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055911874551623860/Tart.JPG?width=716&height=955", description: "Currant Tart by Chef Christina Rasmussen")
straw = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055917174344134726/Strawberry.png.jpeg?width=954&height=954", description: "Strawberries and Cream")
yule = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055911875440808026/yulelog.JPG?width=954&height=954", description: "Chocolate Yule Log with Chestnut Praline")
taco = Photo.create(image: "https://www.harveynorman.com.au/blog/assets/Cheesecake.jpg", description: "Milk and Honey IC Sandwhich")
cake = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055911802615115786/cakeandme.JPG?width=682&height=955", description: "Chef Angela Pace adjusting a cake.")
butter = Photo.create(image: "https://pbs.twimg.com/media/EQKX7dSWAAAhtmU.jpg", description: "Sourdough, Sunflower Seed Butter")
corn = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055912877267111946/cherrycorn.jpeg", description: "Cherry and Corn")
tomato = Photo.create(image: "https://media.discordapp.net/attachments/1055910530528850011/1055911874836824184/tomato.jpg?width=716&height=955", description: "Tomato, Buffalo Ricotta, Basil Oil")
food = Photo.create(image: "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2015/10/27/36986/628x733_RecipePic_Ryan-Squires.jpg?width=768&height=639&mode=crop&quality=75&anchor=middlecenter", description: "Octopus, Salsa Verde")
noma = Photo.create(image: "https://i.pinimg.com/736x/e0/c5/df/e0c5dffe26168a71354592d5cbada03b.jpg", description: "Ravioli and Seafood")
blcktruffle = Photo.create(image: "https://images.kitchenstories.io/recipeImages/16_01_143_Pasta_withFreshTruffles_Final_4x3.jpg", description: "Black Truffle Pasta")
#Reviews
testReview = Review.create(title: "Would 100% Recommend!", description: "The event was perfect. Angela was able to nail exactly what I wanted!", rating: 5, client_id: sylvia.id, chef_id: angela.id, event_id: newyears.id)

puts "Data seeded!"

#Requests 
first = Request.create(event_id: angela27.id, client_id: sylvia.id, chef_id: angela.id, accepted: false)