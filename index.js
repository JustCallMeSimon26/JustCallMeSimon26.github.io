// Load Articles
fetch("articles/articles.json")
	.then(response => response.json())
	.then(data => console.log(data))

// Get Article Count


//get element to add stuff to
const right_side = document.getElementsByClassName("right")

// add this but with js
/* <div class="article">
				<div class="article-title">
					<h2 class="article-title-text">
						Lightshot Crawler
					</h2>
				</div>
				<div class="article-thumbnail">
					<img class="article-thumbnail-image" src="articles/res/Thumbnail.png" alt="Logo goes here">
				</div>
				<div class="article-description">
					<h2 class="article-description-text">
						Find Random Screenshots by guessing them
					</h2>
				</div>
			</div> */