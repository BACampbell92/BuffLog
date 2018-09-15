var postTitle = document.getElementById('title')
var postAuthor = document.getElementById('author')
var postTags = document.getElementById('tags')
var postDate = document.getElementById('date')
var postContent = document.getElementById('content')

document.querySelector('form').addEventListener('submit', function logIT(i){
i.preventDefault();
console.log(postTitle.value);
console.log(postAuthor.value);
console.log(postTags.value);
console.log(postDate.value);
console.log(postContent.value);
document.querySelector('form').reset();

});

document.querySelector('form').reset();


/* function BlogPost(title, author, tags, date, content) {
    this.title = title;
    this.author = author;
    this.tags = tags;
    this.date = date;
    this.content = content;
}




const BlogPostNew = new BlogPost(
    title = document.getElementById('title'),
    author = document.getElementById('author'),
    tags = document.getElementById('tags'),
    date = document.getElementById('date'),
    content = document.getElementById('content'));


console.log(BlogPostNew.title, BlogPostNew.author, BlogPostNew.tags, BlogPostNew.date, BlogPostNew.content);
*/