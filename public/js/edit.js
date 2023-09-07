const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-content"]').value;
}