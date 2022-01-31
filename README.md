# Tech Blog MVC ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=critical)

## Deployed URL

Click [here]("#") to view deployed application on Github page.

## Link To The Repository

Click [here]("#") to view deployed application on Github page.

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Launch the app](#launch-the-app)
- [Tests with Seeds](#tests-with-seeds)
- [Deployed URL](#deployed-url)
- [Link To The Repository](#link-to-the-repository)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Languages](#languages)
- [Frameworks used](#frameworks-used)
- [Screenshots](#screenshots)

## Description

This application allows various different users to create an account and post blog posts. Users can also edit and delete their own posts. It also allows them to comment on posts from other users.

This app has followed the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation

```
git clone git@github.com:SumaiaSorna/tech-blog-mvc.git
cd tech-blog-mvc
code .
npm i
```

## Launch the app

```
npm run start
```

## Tests with Seeds

```
npm run seed
```

## User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Languages

- HTML5
- CSS
- JavaScript
- JQuery
- MySQL
- Sequelize

## Frameworks used

- Bootstrap
- Font Awesome
- Google Fonts
- Node JS
- Express JS
- Handlebars JS
- MVC Paradigm
- bcrypt

## Screenshots

![screenshots of tech-blog-mvc](#)

![screenshots of tech-blog-mvc](#)

## Questions

If you have any questions about this application, please feel free to contact me in my <a href="mailto:sorna.sumaia@gmail.com">email.</a>
