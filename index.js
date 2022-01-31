fetch("articles/articles.json")
	.then(response => response.json())
	.then(data => alert(data))