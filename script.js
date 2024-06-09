document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('posts');
    const reelsContainer = document.getElementById('reels');
    const postTemplate = document.getElementById('post-template');
    const reelTemplate = document.getElementById('reel-template');
    const newPostForm = document.getElementById('new-post-form');
    const imageInput = document.getElementById('image-input');
    const captionInput = document.getElementById('caption-input');

    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const file = imageInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            const caption = captionInput.value;
            
            addPost(imageUrl, caption);
            newPostForm.reset();
        };
        
        reader.readAsDataURL(file);
    });

    function addPost(imageUrl, caption) {
        const postElement = postTemplate.cloneNode(true);
        postElement.style.display = 'block';
        postElement.querySelector('img').src = imageUrl;
        postElement.querySelector('img').alt = 'Post Image';
        postElement.querySelector('.caption').textContent = caption;
        postsContainer.appendChild(postElement);

        const reelElement = reelTemplate.cloneNode(true);
        reelElement.style.display = 'block';
        reelElement.querySelector('img').src = imageUrl;
        reelElement.querySelector('img').alt = 'Reel Image';
        reelElement.querySelector('.caption').textContent = caption;
        reelsContainer.appendChild(reelElement);
    }
});