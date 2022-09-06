# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![Desk-top view (dark)](.src/assets/Screenshot-dt-dark-small.png)
![Desk-top view (light)](.src/assets/Screenshot-dt-light-small.png)
![Mobile view (light) ](.src/assets/Screenshot-mobile-dark-small.png)
![Mobile view (dark) ](.src/assets/Screenshot-mobile-light-small.png)


### Links

- Solution URL: [Github repo](https://github.com/PeshwariNaan/frontend-mentor-todo-list)
- Live Site URL: [Live link](https://peshwarinaan.github.io/frontend-mentor-todo-list/)

## My process

### Built with

- React
- [React Router 6](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)
- [React-Select](https://www.npmjs.com/package/react-select) - Dropdown Select
- Vite
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library- 
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This was the first project where I have used React-select. It's just a simple npm package for adding a simple dropdown select menu. It is customisable but this was not nearly as easy as I thought it would be especially working with a theme (light/dark mode). Almost everything can be targeted except some very important properies like the color of the input text after you change themes. The text is black and if you are in darkmode, you can't see it and cannot easily change it using styled components. To target that, you need to use a different styling specific to react-select and use the props to the component from there. This was extremely frustating to work out for something that I feel should have taken a few moments and would have taken less time to just build myself. However, after working out the kinks, it is a handy solution for a quick dropdown menu component. You can also use it for a multi-select input for more advanced filtering/selection capabilites so it is worth the effort to learn.Below is how to target the properties (options and singleValue in this case) that cannot be accessed through the use of styled components. 


```
  const customStyles =  {
    option: (provided, state) => ({
      ...provided,
      color: state.selectProps.changeInputText,
      fontSize: '1.5rem',
      fontWeight:' 600',
      backgroundColor: state.isSelected? "orange": null,
      border: state.isFocused? '1px solid orange': null,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.selectProps.changeInputText,
    })    
  }
```
I also learned how to pass state using the <Link> component from react-router-dom 6. This was a very cool thing because you can pass state to the component that the link points to as seen below. This trick worked out great for how I was passing state in this project. I could pass the entire country object with the link to the details page and deconstruct what I need from it there.

```
<Link to={`/details/${country.name.common}`} state={{ country }}>

```

### Continued development

Everything in this industry is developing constantly. Sometimes for better, sometimes not. I continue to explore the changes happening in areas like react-router-dom and trying to find tools that save time and work well without a huge level of added complexity. I'm developing faster in the sense of knowing that some potential solution (no matter how shiny and cool it looks) might not be a efficient direction. 

### Useful resources

Resource for React-select
[React-select documentation](https://react-select.com/home)

## Author

- Frontend Mentor - [@PeshwariNaan](https://www.frontendmentor.io/profile/PeshwariNaan)

