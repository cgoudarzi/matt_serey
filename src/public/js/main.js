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

