# Frontend Mentor - E-commerce Main Product Page Solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

In the challenge, is requested to create a webpage with the following characteristics:

- View the optimal layout for the site depending on their device's screen size (For this challenge, only a desktop and a phone presentation is requested).
- See hover states for all interactive elements on the page.
- Open a lightbox gallery by clicking on the large product image.
- Switch the large product image by clicking on the small thumbnail images.
- Add items to the cart.
- View the cart and remove items from it.

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- At some point, I have to re-create almost all the solution, because I realized that using the "Styled Components" library was a better approach for the solution than using a regular CSS-React integration. With this, I don't want to say that using conventional CSS code is useless or something like this. If you want to use regular CSS, go ahead. 
The point is, I decided to use "SC" despite having a solution in an advanced state. 
And the lesson could be having a sort of detailed planification stage, before starting any project. Including the use of certain libraries. My planification process was poor and maybe was the cause for the delay and the re-work of the solution.

- As a consecuence of using SC, it's customary to code the components and the calling of those at the same file (in my case, ".jsx" files instead of ".js"). 
But the number of components created was large and I decided to separate the process of creating the components (in ".js" files inside a folder called "buildingComponents") and the calling of the components (in ".jsx" files stored in a folder called "mainComponents" and in the "App.jsx" file) in two parts. 
Maybe the large number of resulting files is the cost of creating "cleaner" files in each case.  Even worse, the original approach was to code a component PER file. I have to change that.

- The use of the "useContext" React hook. Maybe this one could be even an "obvious" one. Maybe not. But it's a nice incorporation, as well as the use of a function working as a small library, called by the "useContext" hook. All of this because I tried to follow a "separation of concerns". At some components, that's not true, of course, but it was (indeed) one of the main concepts behind the challenge solution.

- Related with the previous one, in the small library, I want to mention the use of the function "getScreenSize" ([she](https://www.youtube.com/) deserves all the credits of this function). The function works as an alternative to the use of "media queries" and other CSS-related code to create the different layouts requested and as a "excuse" to use a conditional-programming approach. 

- Besides, I decided to use various instances of the "useReducer" hook, creating a sort of "slices" (Redux users will understand the reference), where each "slice" works as a piece of state for different tasks. In the "Useful resources" section, I added a excellent article where the "useReducer" hook is very well explained. Totally recommended.

- As a last point, I added some extra indications at certain SC components. In the challenge, it was requested to work with some ".svg" images. The problem was to create the "hover" effect upon these images. The manipulation of a ".svg" image is a non-trivial issue. And just to change the color, it's necessary to use the "filter" CSS rule. 
You can check, for example, the "LightBoxGalleryComponents.js" file where, the "LightBoxCloseBtn" component (a button), needs a "hover" effect and the definition has a "filter" rule for the "hover" pseudoclass. It's indicated the web page used to 'translate' a hexadecimal into an approximate "equivalent" using the "filter" rule. And, specifically, a second 'translation' was needed, because the color guide of the challenge gave the corresponding color in the "HSL" format. So, a converter from "HSL" to hexadecimal was used too.    

### Useful resources

- [Example resource 1](https://www.example.com) - This is the article mentioned at the previous section, where the "useReducer" hook is greatly explained. It's sad that this website has very few articles related to React.
- ['HSL to Hex' Converter](https://htmlcolors.com/hsl-to-hex) - The converter used to "translate" colors in "HSL" format into hexadecimal. 
- ['Hex color to CSS filter' Converter](https://isotropic.co/tool/hex-color-to-css-filter/) - Here, you can create a "filter" rule to manipulate "hover" pseudoclasses of ".svg" images.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
