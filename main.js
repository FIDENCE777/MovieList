const movies = document.getElementById("movies")
const favouriteMovies = [
    {
      title:"Spirited Away",
      ReleaseDate:"2001",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK49qCGh2280jWDZYaRAYb7by2MObFIXfDolBa3iNBA&s=10",
      score:"8.6"
    },
    {
      title:"Your Name",
      ReleaseDate:"2016",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUa9T41u0zQL019M5OAL-wXzj4nEA92dVPBa6y7eRfA&s=10",
      score:"8.4"
    },
    {
      title:"Totoro",
      ReleaseDate:"1988",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--aNRsbi-EOWMOWlQL2WM3NhOLQXza312LN8RoLOeCw&s=10",
      score:"8.1"
    },
    {
      title:"Ghost In The Shell",
      ReleaseDate:"1995",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxS4HWvNdxSmnP5_Taw1QlN2-prp2RXX5CHmgDb39mg&s=10",
      score:"7.9"
    },
    {
      title:"EvanGelion: 10 YOU ARE (NOT) ALONE",
      ReleaseDate:"2007",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDFqkdC4gfZp-kSosZaUQ3_Z15BFXJVfIn2KgIJlILg&s=10",
      score:"7.5"
    },
    {
      title:"Weathering Wish You",
      ReleaseDate:"2019",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQHMbQBeC6_S3zjTECL4pKC1AucHJjIOPl_Hu0w89tA&s=10",
      score:"7.5"
    },
    {
      title:"Mirai",
      ReleaseDate:"2018",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96TLwa3DTzQC0PqkbNaOw0jES9gkp_1rn0A6BDQOtXg&s=10",
      score:"7.0"
    },
    {
      title:" Crusher Joe",
      ReleaseDate:"1983",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj86pXpEph2904buINZ_5i-OHSoDLg8tvIks7JNSa_A&s=10",
      score:"7.0"
    },
    {
      title:"Princess Mononoke",
      ReleaseDate:"1997",
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsnVIsRrMB_pFMVa1h5O04GO3wgtuYflXhjwW16ebvw&s=10",
      score:"8.3"
    },
    {
      title:"A Sient Voice",
      ReleaseDate:"2016",
      imgUrl:"https://image.tmdb.org/t/p/original/xojX4BFXkj92CnkYuwmlZXNjpr8.jpg",
      score:"8.2"
    },
]
for(let i = 0; i < favouriteMovies.length; i++
){
    const movie = favouriteMovies[i]
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parentDiv")
    const img = document.createElement("img");
    img.classList.add("image")
    const title = document.createElement("h2");
    title.classList.add("color2")
    const ReleaseDate = document.createElement("p");
    ReleaseDate.classList.add("color")
    const score = document.createElement("div");
    score.classList.add("color")

    title.textContent = movie.title;
    img.src = movie.imgUrl;
    ReleaseDate.textContent = "Release Date" + movie.ReleaseDate;
    score.textContent = "Score" + movie.score;

    parentDiv.appendChild(img);
    parentDiv.appendChild(title);
    parentDiv.appendChild(ReleaseDate);
    parentDiv.appendChild(score);

    movies.appendChild(parentDiv);
}