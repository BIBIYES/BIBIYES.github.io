var posts=["posts/26048.html","posts/21676.html","posts/26769.html","posts/35831.html","posts/17124.html","posts/14713.html","posts/17418.html","posts/27456.html","posts/35832.html","posts/48750.html","posts/16107.html","posts/46321.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };