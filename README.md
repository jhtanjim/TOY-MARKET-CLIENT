# b7a11-toy-marketplace-client-side-jhtanjim
Project Structure
The project has the following structure:

 src
 # Layout: 
 Contains the layout components for the main structure of the application.
 # Pages: 
 Contains the different pages of the application.
# Routes: 
Contains the route configuration using React Router.
# public: 
Contains the static assets and the index.html file.
 # Pages
# Home: 
The home page of the application.
# SignUp: 
The sign-up page for user registration.
# Login: 
The login page for user authentication.
# AddToys: 
The page to add new toys. Requires authentication.
# MyToys: 
The page to display the user's toys. Requires authentication.
# Update: 
The page to update a specific toy. Requires authentication.
# Blogs: 
The page to display blogs or articles.
# AllToys: 
The page to display all available toys.
# ViewDetails: 
The page to view details of a specific toy. Requires authentication.
# NotFound: 
The page for handling 404 (Not Found) errors.
# Components
# Main: 
The main layout component that includes the navbar, page content, and footer.
# Navbar: 
The navigation bar component.
# Footer: 
The footer component.
# Routes
The route configuration is defined in the router.js file. It includes the following routes:

# /: Home page.
/login: Login page.
/signUp: Sign-up page.
/addtoys: Add new toys page. Requires authentication.
/mytoys: User's toys page. Requires authentication.
/update/:id: Update toy page. Requires authentication.
/blogs: Blogs page.
/alltoy: All toys page.
/toy/:id: Toy details page. Requires authentication.
# *: 404 page.
# Authentication and Private Routes
Some pages require authentication to access. This is handled using the PrivateRoutes component. When a user tries to access a private route, they will be redirected to the login page if they are not authenticated.

# API Integration
The application makes API requests to fetch data for specific pages. The API endpoints are defined using the fetch function and are specified in the loader property of each route. The fetched data is then used to render the page.

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.