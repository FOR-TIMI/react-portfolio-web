# A Developer's Portfolio - Built with react

## Description
Deployed portfolio of work samples, about me, contact built with React

## Support the project ⭐
If you're feeling great and want to show your support, please consider checking out my other projects, giving this repository a star, and sharing it with others. This helps me to gain visibility and grow our community. Thank you in advance for your support. 🙏
 
![image](https://raw.githubusercontent.com/lusaxweb/vuesax/master/public/github-vuesax-star.gif)

    
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Customize Portfolio](#customize-portfolio)
  - [customize colors](#colors)
    - [Background Color](#background-color-)
    - [Background Color Variant](#primary-color-variant-)
    - [Primary Color](#primary-color)
    - [Primary Color variant](#primary-color-variant-)
  - [Add your Resume](#resume)
  - [customize Social Media links](#social-links)
  - [About Me](#about-me)
  - [Experience](#experience)
  - [Services](#services)
  - [Portoflio](#portfolio)
  - [Reviews](#reviews)
  - [Contact](#contact)
    - [Customize contact links](#customize-contact-links)
    - [Contact Form](#contact-form)
- [How to Deploy to Github pages for free](#how-to-deploy-to-github-pages-for-free)
- [Contributions](#contribution)
- [Licenses](#licenses)
- [Questions](#questions)
- [website link](https://for-timi.github.io/react-portfolio-web/) // Checkout the deployed website 
    
        
## Installation
To set up and utilise this project. Take the following steps.

- Step 1: Clone this repository
- ![image](https://user-images.githubusercontent.com/104241247/209482930-7be4f3e2-c9eb-41e3-a6de-651cdf77d8a2.png)
- Step 2: Install dependencies by running the ``` npm install ``` command in the command line
- Step 3: Open your code editor by running the command ``` code . ```
- step 4 : run ``` npm start ``` in the terminal.

    
## Usage
A responsive, single page application for developers to showcase their skills

## Customize Portfolio
- ### Colors:
  To customize the colors to the colors you want, CSS variables are used in the [index.css file](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/index.css). There you can update the variables to set your custom colors
   - ### Background Color: <br>
      To set a new background color, update the `--color-bg` CSS variable and set your custom color in rbg, hex,hsl.
     ```:root{
     --color-bg: YOUR CUSTOM COLOR CODE; //This line
     }
      ```
   - ### Background Color Variant: <br>
        To set a update background color variant , update the `--color-bg-variant` CSS variable and set your custom color in rbg, hex,hsl
     ```
     :root{
     --color-bg-variant: YOUR CUSTOM COLOR CODE; //This line
     }
      ```
   - ### Primary Color:<br>
        To update the primary color, update the  `--color-primary`CSS variable and set your custom color in rbg, hex,hsl.
     ```
     :root{
     --color-primary: YOUR CUSTOM COLOR CODE; //This line
     }
      ```
   - ### Primary Color variant: <br> 
      To update the primary color, update the  `--color-primary` CSS variable and set your custom color in rbg, hex,hsl.
     ```
     :root{
     --color-primary: YOUR CUSTOM COLOR CODE; //This line
     }
      ```
      
- ### Resume:
   To add your custom images to the project, do the following
    - Navigate to the [assets folder](https://github.com/FOR-TIMI/react-portfolio-web/tree/main/src/assets).
    - rename, save your resume as `CV.pdf` and move it into the assets folder.
    
 
    Note: If your resume is not in pdf format and you don't want to update it to PDF format, navigate to the [Call to action](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Header/CTA.jsx) component and update the import statement to use your resume file 
    ```
    import CV from '../../assets/YOUR RESUME NAME' //update this line
     ```
     
     and you should be good to go on your resume.
     
- ### Social links: 
     In terms of Social media links, I used the `Linkedin`, `Github` and `Codewars` links in the [Header section](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Header/HeaderSocials.jsx).
     If you want to use your own `Linkedin`, `Github` and `Codewars` links, 
     1. navigate to the [Header socials component](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Header/HeaderSocials.jsx). 
     2. update the href attributes for the three links <br><br>
      
     
       <a data-aos="fade-down" data-aos-duration="1500"  href="YOUR LINKEDIN URL" target="_blank" rel="noreferrer"><BsLinkedin/></a>
       <a data-aos="fade-down" data-aos-duration="1200" href="YOUR GITHUB URL" target="_blank" rel="noreferrer"><FaGithub/></a>
       <a data-aos-duration="900" data-aos="fade-down"  data-aos-anchor=".header__socials"  href="YOUR CODEWARS URL" target="_blank" rel="noreferrer"><SiCodewars/></a> 
      
      

    If you want to add some more links or you want to make changes to the current links and Icons
    1. Find the Icon you want to add from [React Icons website](https://react-icons.github.io/react-icons/search)
    2. Import the Icon
    3. add a new href or update and existing one, put the icon you imported in the anchor tag. <br> <br>
    
  
      <a data-aos="fade-down" data-aos-duration="1200" href="YOUR URL" target="_blank" rel="noreferrer"><YourIcon/></a>
      
  with that, you can add and remove social media links and icons.
  
  - ### About me:
    To customize the about me section, Navigate to the [about component](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/About/About.jsx)
    and then customize the `experience`, `collaborators` and `paragraph` as you see fit.
    
 - ### Experience: 
   To Add your experience and tech stack to the experience section, Navigate to the [Experience Component](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Experience/Experience.jsx) and update jsx how you see fit.
   
 - ### Services:
  To update the services, navigate to the [Services Component](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Services/Services.jsx)
  and update your services as you see fit.
  
 - ### Portfolio:
  To update the portfolio section to accomodate your own projects. First, navigate to the [Portoflio component](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Portfolio/Portfolio.jsx) and then follow these steps; 
   1. Import all Images of your projects to the [assets Folder](https://github.com/FOR-TIMI/react-portfolio-web/tree/main/src/assets)
   2. update the projects array to look like the following;
   
     const projects = [ 
      { 
        name : {PROJECT NAME} , //Must match the name of the project on github
        deployedLink: "{LINK}", //Deployed link of your project
        image: require('../../assets/{THE IMAGE RELATED TO THIS PROJECT}'),
        fadeDuration:{ANIMATION SPEED} // To set the animation speed.
      }
    ]
     
  After making these changes, your project should be rendered on the page just as usual.
      
 - ### Reviews
  To update the reviews section, Navigate to the [Reviews Component](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/src/components/Review/Review.jsx).
  In the reviews component, update the `reviewsData` array to fit your reviews. To customize the reviewsData array, follows these steps
   1. upload the images for each reviewer and move them to your [assets folder](https://github.com/FOR-TIMI/react-portfolio-web/tree/main/src/assets).
   2. Once you've uploaded your images to the assets folder, import those images into the reviewData array;
      
    const reviewData = [
    {
      avatar: require('../../assets/REVIEWER'S IMAGE'), //Should be the image that was imported in the 1st step
      name: 'THE NAME OF THE REVIEWER',
      review: `YOUR REVIEW TEXT`
    } 
    ]
    
    Once you've updated the reviewData array, your reviews should be rendered on the page successfully.
    
- ### Contact:
     - #### Customize contact links:
       To customize the `Linkedin`, `Instagram` and `Email` links, Navigate to the href attributes of each element.
       1. email : Update the email link to `mailto:YOUR-EMAIL-ADDRESS` // updates the mailto field in the user's email
       2. linkedin: Update the linkedin link to `YOUR LINKEDIN URL`
       3. Instagram: Update the Instagram link to `https://ig.me/m/YOUR-INSTAGRAM-USERNAME` //sets you username open in the user's inbox
       
     - #### Contact Form:
        To update the form so you recieve messages directly into your inbox, create an account on [emailJs](https://www.emailjs.com/) platform and take a quick look at the [documentation](https://www.emailjs.com/docs/examples/reactjs/).
        create a template and update the fields as instructed in the [emailJs Documentation](https://www.emailjs.com/docs/examples/reactjs/) 
        
        With this, you should be setup to recieve emails from the form.
  
 
 ## How to Deploy to Github pages for free
 
 After customizing the website, you can deploy it to github pages for free by following these steps;<br>
 
   - Navigate to the [package.json file](https://github.com/FOR-TIMI/react-portfolio-web/blob/main/package.json)
   - Update the `homepage` in the package.json file
    ```
     {
     "homepage": "https://YOUR-GITHUB-USERNAME.github.io/NAME-OF-REPOSITORY",
     }
    ```
      
      Make sure both your github username and the name of the repository on GitHub are spelt correctly.
    Note: you don't need to update the scripts because the scripts have been updated for you.
    
   - open up your terminal and run the command `npm run deploy`. This will take some time so grab your popcorn and wait for it to finish.
   - finally, you new portfolio website should be deployed to GitHub. your website link should be <br> `https://YOUR-GITHUB-USERNAME.github.io/NAME-OF-REPOSITORY-ON-GITHUB/`
    
   Note: if you have any error while deploying your new portfolio website, checkout [github pages documentation](https://docs.github.com/en/pages)
       
 
  
    
    
    
  


    


## Screenshot
- ![image](https://user-images.githubusercontent.com/104241247/209482825-d7faee08-cc82-4570-bed7-4bb0decf20e7.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482830-6c82850c-d49d-4197-9ec1-3f9b76a728f7.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482835-ac205640-914a-46f4-a17a-28f926925555.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482840-22a66001-d6e5-440c-9581-c432a36815cb.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482843-3159120a-aee1-44aa-aa64-20151b526de9.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482846-058e0c1b-cc2f-4c77-bebf-4b1c4994bff1.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482853-f029c4ae-e7f5-448a-a590-8046632f5ab3.png)
- ![image](https://user-images.githubusercontent.com/104241247/209482862-c68c6184-7b2e-4282-b557-fe3cc6b9c810.png)




## Licenses
### MIT license
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## website
https://for-timi.github.io/react-portfolio-web/

## Contribution
Made with ❤️ by Timi

## questions
Feel free to reach out via email on [femiladiranerife24@gmail.com](mailto:femiladiranerife24@gmail.com) or [view some other projects](https://github.com/FOR-TIMI/).
