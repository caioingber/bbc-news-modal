//locations = [london, durban, DC, Rio, Tokyo]
// key = eebcb3a9d0e7471c851bb8dbaa15fad4
let boxes = document.querySelectorAll('.news-box')
let title = document.querySelectorAll('.headline-text')
let timeStamp = document.querySelector('.publish-date')
let modContainer = document.querySelector('.modal-container')
let modal = document.querySelector('.modal')
let images = document.querySelectorAll('.stretch-img')
let xButton = document.querySelector('#close-text')
let contentBox = document.querySelector('#news-content')


closeButton = (e) => {
    e.preventDefault()
    modContainer.style.zIndex = -1
    modContainer.style.opacity = 0
    modal.style.zIndex = -1
    modal.style.opacity = 0
    contentBox.innerText = ""
    // modalUrl.setAttribute('href', '')

}

xButton.addEventListener('click', closeButton)

let body = document.querySelector('main')

let baseUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eebcb3a9d0e7471c851bb8dbaa15fad4"


//API request to fill in page with article data when loaded
fetch (baseUrl)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res)
        for (let i=0; i < boxes.length; i++) {
        //fetch image for article
            let image = res.articles[i].urlToImage
            images[i].setAttribute('src', image)
            let headline = res.articles[i].title
            title[i].innerText = headline
            //hover functions for images/textboxes
            function showHeadline () {
                title[i].classList.add('show-text')
                images[i].classList.add('shrink-img')
                images[i].classList.remove('stretch-img')
            }
            boxes[i].addEventListener('mouseenter', showHeadline)
            function removeHeadline () {
                title[i].classList.remove('show-text')
                images[i].classList.remove('shrink-img')
                images[i].classList.add('stretch-img')
            }
            boxes[i].addEventListener('mouseleave', removeHeadline)
            
            //eventlistener Modal
            function showModal(e) {
                e.preventDefault()
                //display modal div
                title[i].classList.remove('show-text')
                modal.style.zIndex = 2000
                modal.style.opacity = 1
                modContainer.style.zIndex = 1
                modContainer.style.opacity = 1
                // show headline in modal
                let modalHeadline = document.querySelector('#headline-modal')
                modalHeadline.innerHTML = headline
                // show description
                let modalDescription = document.querySelector('#news-description')
                modalDescription.innerHTML = res.articles[i].description
                //show modal image
                let modalImage = document.querySelector('#modal-image')
                modalImage.style.backgroundImage = `url(${image})`
                //link article URL
                let modalUrl = document.querySelector('#article-link')
                let artLink = res.articles[i].url
                modalUrl.setAttribute('href', artLink)
                //show article content modal
                let artContent = res.articles[i].content.substring(0, 220)
                // removing line breaks from API
                let contentArr = artContent.split('\r\n')
                contentArr = contentArr.join(". ")
                let modContent = contentArr.toString()
                contentBox.innerText = `${modContent}...`
                //Show publish date in modal
                let publishTime = res.articles[i].publishedAt
                let trimStamp = publishTime.substring(0, 10)
                let arrayStamp = trimStamp.split('-')
                let date = new Date(arrayStamp)
                let stringDate = date.toString()
                timeStamp.innerHTML = stringDate.substring(0, 15)
            
            }
            boxes[i].addEventListener('click', showModal)
    }
    })

 