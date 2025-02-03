document.addEventListener("DOMContentLoaded", function () {
  // Example: Alert when clicking a profile bio
  const profileBio = document.querySelector(".profile-bio");
  profileBio.addEventListener("click", () => {
    alert("Welcome to Nigeria Social Network! 🇳🇬");
  });

  // Example: Like button functionality (add your own logic)
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    post.addEventListener("dblclick", () => {
      alert("You liked this post! ❤️");
    });
  });
});
