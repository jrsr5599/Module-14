const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");

if (body) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
      document.location.reload();
    }
  };

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);