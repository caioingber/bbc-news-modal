//locations = [london, durban, DC, Rio, Tokyo]
// key = eebcb3a9d0e7471c851bb8dbaa15fad4
let locations = [44418, 1580913, 2514815, 455825, 1118370]
let boxes = document.querySelectorAll('.news-box')
let title = document.querySelectorAll('.headline-text')
let date = document.querySelectorAll('.publish-date')


let nameUrl = "https://www.metaweather.com/api/location/search/?query=london"

let baseUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eebcb3a9d0e7471c851bb8dbaa15fad4"


//API request to fill in page with article data when loaded
fetch (baseUrl)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res)
        for (let i=0; i < 6; i++) {
        //fetch image for article
        let image = res.articles[i].urlToImage
        boxes[i].style.backgroundImage = `url(${image})`
        boxes[i].style.backgroundSize = 'contain'
        boxes[i].style.backgroundPosition = 'center bottom'
        boxes[i].style.backgroundRepeat = 'no-repeat'
        //fetch headline
        let headline = res.articles[i].title
        title[i].innerText = headline
        //fetch timestamp
        let publishTime = res.articles[i].publishedAt
        let trimStamp = publishTime.substring(0, 10)
        date[i].innerHTML = trimStamp
    }
    })