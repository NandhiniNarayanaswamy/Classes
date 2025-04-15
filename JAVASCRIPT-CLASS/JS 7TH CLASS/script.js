function fetchPosts() {
    //fetching the data from the API and displaying in UI
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json()) //convert response to JSON
        .then(posts => {
            const container = document.getElementById("postContainer");
            container.innerHTML = ""; //clear existing posts before adding the new posts

            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post"); //if we wanted to add css class in javascipt then we have to use
                postElement.setAttribute("data-id", post.id); //assigning the ID for updating

                postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>

                <div class = "actions">
                     <button class = "edit-btn" onclick = "updatePost(${post.id})">Edit</button>
                     <button class = "delete-btn" onclick = "deletePost(${post.id})">Delete</button>
                </div>
                `;
                container.appendChild(postElement)
            });
        })
        .catch(error => console.log("Error fetching the posts", error.message))

}
//function to add the new post
function addPost() {
    const title = document.getElementById("titleInput").value;
    const body = document.getElementById("bodyInput").value;


    if (!title || !body) {
        alert("Title and body cannot be empty");
        return;
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body })
    })

        .then(response => response.json())
        .then(newPost => {
            alert("Post is added successfully!");
            // clear the fields after the clicking the post button
            document.getElementById("titleInput").value = "";
            document.getElementById("bodyInput").value = "";
            // adding new post to the UI
            const container = document.getElementById("postContainer");
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            //if we wanted to add css class in javascipt then we have to use
            postElement.setAttribute("data-id", newPost.id);
            //assigning the ID for updating

            postElement.innerHTML = `
        <h3>${newPost.title}</h3>
        <p>${newPost.body}</p>

        <div class = "actions">
              <button class = "edit-btn" onclick = "updatePost(${newPost.id})">Edit</button>
              <button class = "delete-btn" onclick = "deletePost(${newPost.id})">Delete</button>
        </div>
        `;
            container.prepend(postElement);
        })

        .catch(error => console.log("Error fetching the posts", error.message))
}

function deletePost(postId) {
    fetch("https://jsonplaceholder.typicode.com/posts/${postID}", {
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                alert("post is deleted successfully")
                const postElement = document.querySelector(`[data-id='${postId}']`)
                if (postElement) {
                    postElement.remove()
                }
                else {
                    throw new Error("failed to delete the post");

                }
            }
        })
        .catch(error => console.log("error deleting the posts", error))
}

fetchPosts();