//Json Path. Up here if i ever need to change it for... some odd reason
const articlesPath = "articles/articles.json"


function addArticles(path) {
	fetch(path)
	.then(response => response.json())
	.then(data => {
		const rightSide = document.getElementById('right')
		for (let articleIndex = 0; articleIndex < data.articles.length; articleIndex++) {
			
			const titleText = document.createTextNode(data["articles"][articleIndex]["title"])
			
			const articleTitle = document.createElement("h2")
			articleTitle.appendChild(titleText)
			articleTitle.classList.add('article-title-text')
			
			const articleTitleContainer = document.createElement("div")
			articleTitleContainer.appendChild(articleTitle)
			articleTitleContainer.classList.add('article-title')
			
			const articleImage = document.createElement("img")
			articleImage.src = data["articles"][articleIndex]["image"]
			articleImage.alt = "Thumbnail goes here"
			articleImage.classList.add('article-thumbnail-image')

			const articleImageContainer = document.createElement("div")
			articleImageContainer.appendChild(articleImage)
			articleImageContainer.classList.add('article-thumbnail')

			const descriptionText = document.createTextNode(data["articles"][articleIndex]["desc"])
			
			const articleDescription = document.createElement("h2")
			articleDescription.appendChild(descriptionText)
			articleDescription.classList.add('article-description-text')

			const articleDescriptionContainer = document.createElement("div")
			articleDescriptionContainer.appendChild(articleDescription)
			articleDescriptionContainer.classList.add("article-description")

			const articleContainer = document.createElement("div")
			articleContainer.appendChild(articleTitleContainer)
			articleContainer.appendChild(articleImageContainer)
			articleContainer.appendChild(articleDescriptionContainer)
			articleContainer.classList.add('article')
			
			switch(articleIndex) {
				case 0:
					const upperArticle = document.createElement("div")
					upperArticle.classList.add("upperArticle")
					upperArticle.appendChild(articleContainer)
					rightSide.appendChild(upperArticle)
					break
					case 1:
					const middleArticle = document.createElement("div")
					middleArticle.classList.add("middleArticle")
					middleArticle.appendChild(articleContainer)
					rightSide.appendChild(middleArticle)
					break
					case 2:
					const bottomArticle = document.createElement("div")
					bottomArticle.classList.add("bottomArticle")
					bottomArticle.appendChild(articleContainer)
					rightSide.appendChild(bottomArticle)
					break
				}

		}
		}
	)
}

addArticles(articlesPath)