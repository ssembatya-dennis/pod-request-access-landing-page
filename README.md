# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)

## Overview

The Pod request access landing page challenge on the Frontend Mentor platfoarm is a perfect challenge for one who is now comfortable with HTML and transiting from various layout in CSS with also basic understanding of JS.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

- Desktop view
  ![](./assets/desktop/Desktop-Pod-request-access-landing-page.png)

- Tablet view
  ![](./assets/tablet/Tablet-Pod-request-access-landing-page.png)

![](./assets/mobile/Mobile-Pod-request-access-landing-page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- I began the Pod request access landing page challenge on the Frontend Mentor by writting the entire page's HTML and then pushed it to Github. I then added reset styles to disable default browser styles inorder to start styling from a clean sheet. I tried so many alternatives of coming up with the page hero section and ended up using positioning for my hero section.

- The downside of using this formular was that Responsive design was to be a serious issue in my development for I had to write many media queries to get the page looking as close to the figma design as possible on various media break points.

- I ended my development process by adding the form validation functionality to the email when the submit button is clicked and this was not simple for it was my first time writing custom form validation JS code on my own but with some little research here and there and watching some youtube videos, I managed to get it up and running.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

In this challenge I managed to learn ways how you can write custom form validation code in JavaScript and am to continue learning JavaScrpit from this challenge moving on forwards steadily.

To see how you can add code snippets, see below:

```js
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
```

### Continued development

Am not very comfortable with custom form validation code in vanilla JavaScript because I haven't played a lot with it that much. This solution renders icons well in chrome and not in mozilla so am to continue fixing this bugs and also see what advise the community is offering me to improve on my solution.

## Author

- Frontend Mentor - [@ssembatya-dennis](https://www.frontendmentor.io/profile/ssembatya-dennis);
- Twitter - [@DennisSsembatya](https://twitter.com/DennisSsembatya)
