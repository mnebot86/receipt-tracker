# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Image.destroy_all
Receipt.destroy_all
User.destroy_all

User.create(name: 'miguel', email:'miguelnbt@gmail.com', password_digest: '12345')
User.create(name: 'jaden', email:'jaden@gmail.com', password_digest: '12345')
User.create(name: 'christ', email:'christ@gmail.com', password_digest: '12345')

Receipt.create(amount: 50, catagory: 'home', date: '2021-09-16', note: 'Purchase windows at Lowes', title: 'Window Purchase', user_id: 1)
Receipt.create(amount: 100, catagory: 'medic', date: '2021-01-17', note: 'Broke my leg sking', title: 'Broken Leg', user_id: 2)
Receipt.create(amount: 80, catagory: 'child', date: '2021-23-20', note: 'Purchase bagpack and notebooks', title: 'School Supplys', user_id: 3)


Image.create(receipt_id: 1, file: 'recipts1.jpeg')
Image.create(receipt_id: 2, file: 'receipt2.png')
Image.create(receipt_id: 3, file: 'Receipt3.png')