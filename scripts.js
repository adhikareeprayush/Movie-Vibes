const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('search').value;
    console.log(title)
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=14a6db72`);
    const data = await response.json();
    document.getElementById('search').value = '';

    document.getElementById('title').innerHTML = data.Title;
    document.getElementById('release').innerHTML = data.Released;
    document.getElementById('actors').innerHTML = data.Actors;
    document.getElementById('rating').innerHTML = data.Ratings[0].Value;
    document.getElementById('genre').innerHTML = data.Genre;
    document.getElementById('description').innerHTML = data.Plot;
    document.getElementById('poster').src = data.Poster;
    document.getElementById('language').innerHTML = data.Language;
    document.getElementById('writer').innerHTML = data.Writer;
    document.getElementById('runtime').innerHTML = data.Runtime;
    document.getElementById('director').innerHTML = data.Director;
    document.getElementById('box-office').innerHTML = data.BoxOffice;

    //if movie not found
    if (data.Response === 'False') {
        alert(data.Error);
        return;
    }
});

