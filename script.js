let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let returnString = "My movies:" + "<br />";
    let j = 0;
    //Iterate through all elements of the array
    for (let i = 0; i < allMovies.length; i++) {
        const movie = allMovies[i];
        if (movie.haveWatched) {
            returnString += (i+1) + ") " + movie.title + "  |  " + movie.rating + "/10  |  Watched!" + "<br />";
        } else {
            returnString += (i+1) + ") " + movie.title + "  |  " + movie.rating + "/10  |  NOT watched." + "<br />";
        }
        j++;
    }  
    returnString += "You have " + j + " movies in total" + "<br />" + "<br />";
    returnString += "-----------------------------------------------" + "<br />" + "<br />";
    return returnString;
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let j = 0;
    let returnString2 = "Movies with a higher rating than " + rating + "<br />";
    for (let i = 0; i < allMovies.length; i++) {
        const movie = allMovies[i];
        if (movie.rating > rating) {
            returnString2 += j+1 + ") " + movie.title + "  |  " + movie.rating + "/10"  + "<br />";
            //console.log((j+1) + ") " + movie.title + " | " + movie.rating + "/10" );
            j++;
        }
    }
    returnString2 += "In total, there are " + j + " matches."  + "<br />" + "<br />";
    return returnString2;
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (let i = 0; i < allMovies.length; i++) {
        const movie = allMovies[i];
        if (movie.title == title) {
            //toggle the 'haveWatched' property of the specified movie (from true to false or vice versa).
            if (movie.haveWatched) {
                movie.haveWatched = false;
            } else {
                movie.haveWatched = true;
        }
        }
        
    } 
}
////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE

let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

document.getElementById('result').innerHTML = "";

document.getElementById('result').innerHTML += printMovies();

let movie1 = new Movie("Parasite", 2, false);
addMovie(movie1);
document.getElementById('result').innerHTML += printMovies();

changeWatched("Spiderman");
document.getElementById('result').innerHTML += printMovies();

changeWatched("Spiderman");
document.getElementById('result').innerHTML += printMovies();

document.getElementById('result').innerHTML += highRatings(3.5);

//document.getElementById('result').innerHTML += "ending";