# Etch-a-Sketch

**Understanding the Problem**

In this Project creating a webpage with a main div container that contains div items. The4se div items will be size
row x col square grids where the user can interact with
Some characteristics of the row x col grid is as follows: 

1. Grid squares will be in a "container div"
2. divs will need to appear as a grid
3. "Hover" effect used when the mouse is over a grid and the effect is changing the color 
4. Button at the top of the screen that will ask for the number of squares on the new gird. Will clear any exisiting 
   grid

More details as follows on the odin project page https://www.theodinproject.com/lessons/foundations-etch-a-sketch

**Plan** 
Create a div containers that contains all the div grids
Create 16 div containers inside the "main" div container through the use of dynamic allocation through js
Use of for loop to print the divs

Before the using JS to develop the functionality. I will first look back on flexbox and revisit CSS and HTML and do a 
static implementation to see how it looks before doing dynmaic functionality through JS 

1. Does your program have a user interface? What will it look like? What functionality will the interface have? 
Sketch this out on paper.

Yes the program will have an interface. It will consist of the following
* Button for User to interact to with the square grid.
* Color Button to change the color of a square in the grid (Hover effect)
* Button that will prompt the user to enter the dimension of the gris

2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
User will enter the data. For example user presses the button to change dimension a prompt will pop up and allow the user
to enter the number of rows and number of cols

3. What’s the desired output? Given your inputs, what are the steps necessary to return the desired output?
* Use JS to handle the functionality such as adding divs and aligning the divs into the main div container.
* JS to change the background color of the squares

