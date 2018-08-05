// Build out the following methods on the `CommentsController` class (Use ES6 syntax)
//
// + `CommentsController.prototype.addCommentFormListener()`
//   + iterates through each comment form and adds an eventlistener to trigger a function on form submit
//   + function should grab the imageId + comment and create a new Comment with those arguments
//   + execute the render function on that found image object to append the new comment
// + `CommentsController.prototype.render(commentObject)`
//   + selects the appropriate `ul` for this comment to be added to
//   + appends the new comment element to this `ul`
//   + Don't try to copy the `ImagesController.render` function because that is implemented differently

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment');
    this.$wrapper = $('#wrapper');
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    let self = this;
    for (let c = 0; c < this.$addCommentForm.length; c++) {
      this.$addCommentForm[c].addEventListener('submit', function(event){
        event.preventDefault(); // prevents page from reloading on form submit
        let imageId = parseInt($(this).data('id'));
        let commentContent = $(`#comment-description-${imageId}`).val();
        let newComment = new Comment(commentContent, imageId)
        self.render(newComment)
        $(`#comment-description-${imageId}`).val('');
      });
    }
  }

  render(commentObject) {
    $(`#comments-${commentObject.image.id}`).append(commentObject.commentEl());
  }

}
