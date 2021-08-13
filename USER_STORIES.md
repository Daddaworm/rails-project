## Model ideas

Idea #1

user ---------------------------------< comments >-------------------------< posts >
has_many :posts                          belongs_to :user                     has_many :comments
                                         belongs_to :post                     belongs_to :user


## TABLES
USER
:username
:password
:password_confirmation
:password_digest

POST
:title
:body
:user_id

COMMENT
:comment
:user_id
:post_id

## USER STORY
-Fist page user encounters is a signup/login page.  
-user can either sign up or login.
-upon login, user is automatically directed to homepage where all post are displayed
-user can click on a post to see the comments for that post OR user can create a new post
-Once in a post, user or users can create, read, update, delete posts

## COMPONENTS NEEDED
-Signup.js
-Login.js
-Logout.js
-Navbar.js ?????
-Home.js
-