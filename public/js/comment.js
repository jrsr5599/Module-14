const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="-post-id"]').value;
    const body = document.querySelector('textarea [name="comment-body"]').value;
}