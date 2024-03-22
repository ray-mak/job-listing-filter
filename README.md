<h1>Overview</h1>
<p>This is the third challenge in which I used React. This was another really good challenge to do so because of how the cards are rendered. Furthermore, this was a good way to practice useState as well as integrate a number of other functions within React.</p>

<h2>The Challenge</h2>
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

<h2>Screenshot</h2>
<img src="https://github.com/ray-mak/job-listing-filter/assets/154634286/81bd5ad5-207b-401f-85df-a84e74d69a0d" alt="screenshot"/>

<h1>My Process</h1>
<p>For this challenge, I built the layout for Desktop first, and then for mobile.</p>
<p>Once I got the layout down, I was really able to dig into react. Since this challenge came with a date file, I was able to import that, and generate job cards from that data file. </p>
<p>After getting all the cards loaded, I needed to create a useState to keep track of the filters I want to add for each job. To do so, I added a handleClick function to each of the filter options that will update the filters array.</p>
<p>Now I needed the filters bar to display the filters I had added to the array. So I created a FiltersBar component that only appeared when filters.length > 0. It will also dynamically update whenever I added a new filter. The next step was to add some functionality to the filter bar that allowed me to remove the filters and to check if a filter already exists when adding a new filter.</p>
<p>The last, and trickiest part, was updating the job cards to only display jobs that matched all the filters. I had to resort to a bit of googling for this but eventually found a way. I ended up creating a new variable which took the data file, and used the filter method to "filter" all the filters that I had in my filters arrray (I know, that's a lot of filtering). </p>

<h2>Built With</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>React</li>
</ul>

<h2>What I learned</h2>
<p>I learned how to pass functions and props down to more than the first level. It was a little confusing at first, but after reviewing it a bit it makes a lot of sense. I also learned more about useState and the filter method within React. </p>

<h1>Author</h1>
<p>Ray Mak</p>
https://www.frontendmentor.io/profile/ray-mak
