function addArticles(path) {
	fetch(path)
	.then(response => response.json())
	.then(data => {
		const rightSide = document.getElementById('right')
		for (let articleIndex = 0; articleIndex < data.length; articleIndex++) {
		
			const titleText = document.createTextNode(data[articleIndex]["title"])
			
			const articleTitle = document.createElement("h2")
			articleTitle.appendChild(titleText)
			articleTitle.classList.add('article-title-text')
			
			const articleTitleContainer = document.createElement("div")
			articleTitleContainer.appendChild(articleTitle)
			articleTitleContainer.classlist.add('article-title')
			
			const articleImage = document.createElement("img")
			articleImage.src = data[articleIndex]["image"]
			articleImage.alt = "Thumbnail goes here"
			articleImage.classList.add('article-thumbnail-image')

			const articleImageContainer = document.createElement("div")
			articleImageContainer.appendChild(articleImage)
			articleImageContainer.classlist.add('article-thumbnail')

			const descriptionText = document.createTextNode(data[articleIndex]["desc"])
			
			const articleDescription = document.createElement("h2")
			articleDescription.appendChild(descriptionText)
			articleDescription.classList.add('article-description-text')

			const articleDescriptionContainer = document.createElement("div")
			articleDescriptionContainer.appendChild(articleDescription)
			articleDescriptionContainer.classlist.add("article-description")

			const articleContainer = document.createElement("div")
			articleContainer.appendChild(articleTitleContainer)
			articleContainer.appendChild(articleImageContainer)
			articleContainer.appendChild(articleDescriptionContainer)
			articleContainer.classlist.add('article')
			
			rightSide.appendChild(articleContainer)
			}
		}
	)
}

const articlesPath = "articles/articles.json"
addArticles(articlesPath)