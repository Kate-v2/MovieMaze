# MovieMaze

**MovieMaze** is an app to to look up a movie, see it's information, and see what streaming services it's available on.


#### Check it in action!
* [APP]()
* [MovieMaze API](https://movie-maze.herokuapp.com/)

## Setup
1. Fork or clone this repo: `git clone git@github.com:Kate-v2/MovieMaze.git <name of your choice>`
1. Install Dependencies: `npm install`
1. Update Libraries `npm audit fix`
1. Build Application: `npm run build`
1. To see the app in action locally: `npm start` then go to: `http://localhost:8080/`


## APIs, Data, Services
This app obtains data through:
* [MovieMaze API](https://github.com/Kate-v2/MovieMaze_API)
  * [Utelly](https://rapidapi.com/utelly/api/utelly?endpoint=59ef20efe4b09ee1ff544377)
  * [OMDb](http://www.omdbapi.com/)


## How to Use
1. Go to [MovieMaze]()
1. User the search bar to look up a title
1. Pick the title you want
1. View movie/series details


## Known Issues


## Running Tests
To run tests use `npm test`

## Screenshots


## Future Goals
* Incorporate user suggestions
* Incorporate suggestions on each movie page - [TasteDive API](https://tastedive.com/read/api)
* Add a watched button
* Data Visualization for `watched this month` & `watched vs liked`


## How to Contribute
To contribute, see the setup instructions.
* [Open Issues](https://github.com/Kate-v2/MovieMaze/projects/1)
* Create a new branch describing the feature. If you close an issue, include it's number in the branch name.
* Please describe all changes in the Pull Request (to `Master`), and all relative issue cards/actions.
* Please use the Pull Request Template as the baseline for communication - feel free to add more!
* Please update the `README` if anything is affected.


#### Core Unfinished Features
* [FE & BE Project Board](https://github.com/Kate-v2/MovieMaze/projects/1)


## Core Contributors
* [Kate](https://github.com/Kate-v2)

## Technical
* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)

## [Turing](https://www.turing.io/) Project Details:
* [Assignment](http://backend.turing.io/module4/projects/take_home_challenge/take_home_challenge_spec)
* [Rubric](http://backend.turing.io/module4/projects/take_home_challenge/take_home_challenge_rubric)


----------------



## GitHub Pages Setup

This site will be served from GitHub Pages in production.

In order to see your application running on production:

1. From the command line, run `npm run build`.

2. Commit and push your application to GitHub.

3. Visit your repository on Github

4. Go to Settings

5. Under the Github Pages section of Options, select 'master' as your source and click `Save`

Be sure to `npm run build` and commit before each push to master. A few seconds after you push up, you should be able to see your application at <https://your-github-username.github.io/project-name>.
