function linkColor (link) {
    if (link === 'http://localhost:8000/') {
    document.getElementById('home').style.color="#C91AC4";
  } else if (link === 'http://localhost:8000/reel-1' || link === 'http://localhost:8000/cv') {
    document.getElementById('work').style.color="#C91AC4";
  } else if (link ==='http://localhost:8000/contact') {
    document.getElementById('contact').style.color="#C91AC4";
  } else if (link ==='http://localhost:8000/about-me') {
    document.getElementById('about').style.color="#C91AC4";
  } else {
    console.log('failure');
  }
}

linkColor(window.location.href);

$(".ig-icon").hover(function() {
  $(this).toggleClass('ig-shadow');
});

$(".yt-icon").hover(function() {
  $(this).toggleClass('youtube-shadow');
});

$(".vimeo-icon").hover(function() {
  $(this).toggleClass('vimeo-shadow');
});

