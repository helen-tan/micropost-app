import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete (event delegation)
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state (event delegation)
document.querySelector('#posts').addEventListener('click', enableEdit);

//Listen for cancel (event delegation)
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// GET Posts (READ)
function getPosts(){
    http.get('http://localhost:3000/posts') // Use http module
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err)); 
}

// Submit Posts (CREATE)
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

// DELETE Post (DELETE)
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

// Enable Edit State
function enableEdit(e) {
    if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;
        
        const data = {
            id,
            title,
            body
        }

        // Fill form with current post
        ui.fillForm(data);
    }

    e.preventDefault();
}

// Cancel Edit state
function cancelEdit(e) {
 if(e.target.classList.contains('post-cancel')){
    ui.changeFormState('add');
 }

 e.preventDefault();
}

    