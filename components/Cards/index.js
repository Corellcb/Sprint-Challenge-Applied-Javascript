// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsEntry = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let articles = Object.entries(response.data.articles);
        createCard(articles);
    })

function createCard(data) {
    let arr = []
    data.forEach(element => {
        element[1].forEach(element1 => {
            const card = document.createElement('div'),
                headline = document.createElement('div'),
                author = document.createElement('div'),
                imgContainer = document.createElement('div'),
                img = document.createElement('img'),
                span = document.createElement('span');

            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            imgContainer.classList.add('img-container');

            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgContainer);
            imgContainer.appendChild(img);
            author.appendChild(span);

            headline.textContent = element1.headline;
            img.setAttribute('src', element1.authorPhoto);
            span.textContent = `By ${element1.authorName}`;


            cardsEntry.appendChild(card);
        })
    });

    
}

