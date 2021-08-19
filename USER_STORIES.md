## Model ideas

Idea #1

Blog App

user ---------------------------------< comments >-------------------------< posts 
has_many :posts                          belongs_to :user                     has_many :comments
                                         belongs_to :post                     belongs_to :user

## TABLES
USER (user has create)
    :username
    :password_digest

POST (user has full CRUD. (delete will need to delete dependant info too))
    :title
    :content
    :user_id

COMMENT (user has read, create)
    :comment
    :user_id
    :post_id

## USER STORY
-Fist page user encounters is a signup/login page.  
-user can either sign up or login.
-upon login, user is automatically directed to homepage where all blog-post are displayed
-user can create a new blog post from homepage. or click on a blog to read it
-Once in a blog post, user can create, read, update, delete

- stretch - Add a comments section to each blog post where other users can comment. Blog owner will have full crud.  Others will have only read.


## Front-End

Signup


Components needed?
-Signup.js
-Login.js
-Logout.js
-Navbar.js ?????
-Home.js
-