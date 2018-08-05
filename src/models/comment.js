// Build the following on the comment class model (Use ES6 syntax)
//
// + `new Comment(comment, imageId)`
//   + should initialize with an id, image object (findImage) and commentContent (the actual text of the comment)
//   + should save new comment to Comment.all property
// + `Comment.all`
//   + should return all of the comment objects in an array
//   + a property of the Comment class
// + `Comment.prototype.findImage(imageId)`
//   + given an `int` for an image id, returns the image object with that id
//   + before return - adds current comment to image's comments property
// + `Comment.prototype.commentEl()`
//   + returns a string of html
//     + html has an `li` tag with an `id` field and shows the comment

'use strict';
// CommentModel

class Comment {
  constructor(commentContent, imageId){
    this.id = this.constructor.all.length;
    this.commentContent = commentContent;
    this.image = this.findImage(imageId);
    this.constructor.all.push(this);
  }

  commentEl(){
    return `<li class="comment" id="${this.id}">
    <p>${this.commentContent}</p>
    </li>`;
  }

  findImage(imageId){
    let currentImage = Image.all[imageId]
    let tempObj = {
      id: this.id,
      commentContent: this.commentContent
    }
    currentImage.comments.push(tempObj)
    return currentImage;
  }
}

Comment.all = [];
//
