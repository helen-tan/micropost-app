import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete (event delegation)
document.querySelector('#posts').addEventListener('click', deletePost);

// GET Posts
function getPosts(){
    http.get('http://localhost:3000/posts') // Use http module
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err)); 
}

// Submit Posts
function submitPost(){
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const data = {
        title: title,
        body: body
    }

    // Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post Added!', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}

// DELETE Post
function deletePost(e) {
    e.preventDefault();

    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;

        if(confirm('Are you sure?')){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post Removed', 'alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
}

    