//locations = [london, durban, DC, Rio, Tokyo]
// key = eebcb3a9d0e7471c851bb8dbaa15fad4
let locations = [44418, 1580913, 2514815, 455825, 1118370]
let boxes = document.querySelectorAll('.weather-box')

let nameUrl = "https://www.metaweather.com/api/location/search/?query=london"

let baseUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eebcb3a9d0e7471c851bb8dbaa15fad4"

fetch (baseUrl)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res)
        for (let i=0; i < 6; i++) {
        let image = res.articles[i].urlToImage
        boxes[i].style.backgroundImage = `url(${image})`
        boxes[i].style.backgroundSize = 'contain'
        boxes[i].style.backgroundPosition = 'center'
        boxes[i].style.backgroundRepeat = 'no-repeat'
        let headline = res.articles[i].title
        boxes[i].innerText = headline
    }
    })