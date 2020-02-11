# BBC News Modal Wireframe

## Introduction

For this project I created a modal wireframe that sources from the BBC News index from News API. The goal of the project was to hone skills in relation to integrating with 3rd party APIs. The current product serves as a real-time news feed of most recently added headlines to the BBC News website. 

[Link](https://caioingber.github.io/ui-patern/) to deployed site.


## Development

I began the development process by creating wireframe of how I wanted the loaded page to appear, including which data fields I wanted to include from the API. Once I had implemented the design, I created an HTML skeleton of the wireframe so that it could ingest data. Once the skeleton and slight stylings had been added I then began to implement the API, which pulls data from a single index.

Once I was able to fetch the data, and have certan fields populate on the landing page, I then began to work on the modal. After I was successful in pulling all data fields into the desired locations on the page, I added more stylings to both the modal and main page and made the site responsive for both mobile and tablet viewports.

## Challenges

The most challenging prospect of the project was the design and implementation of the modal element itself. I utilized z-indices to have the modal appear initially. When it was first successful, I encountered an issue where the area outside the modal container could still be clicked on. To resolve this issue, I created an external container for the modal with a fixed position, set to the height of the viewport, so that once the modal appeared, the z-index of the external container and modal itself would be higher than the rest of the HTML body.

Additional challenges, included manipulating API data to make it more user friendly. I was able to practice string manipulation with these challenges. I converted the timestamp into a more user friendly date format and removed line breaks from the modal content so that the flow of the text would be more inline with the paragraph element in which it was contained.

``` Javascript
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

```

## Unsolved Problems

It future iterations of this project, I would like to optimize the code to adhere more closely with DRY principles. The Javasript can be optimized and the CSS could use notable cleanup. Additionally, I would like to make additional improvements to the mobile responsive site to make it more user friendly.

## Built With

* HTML
* CSS
* Vanilla Javascript

## Acknowledgements

This project was powered by News API