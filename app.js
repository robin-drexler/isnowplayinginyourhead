(function () {
   var xhr;
    function playASong() {
        var songs = JSON.parse(this.responseText),
            song = songs[Math.floor(Math.random() * songs.length)],
            template = '<center><h1>{{title}}<\/h1><br><iframe width="640" height="480" src="//www.youtube.com/embed/{{youtube}}?autoplay=1" frameborder="0" allowfullscreen><\/iframe><\/center>',
            dom = document.createElement('div'),
            domText;

        domText = template.replace('{{youtube}}', song.youtube);
        domText = domText.replace('{{title}}', song.title);

        dom.innerHTML = domText;
        document.querySelector('.content').insertBefore(dom, document.querySelector('#content_area'));
    }

    xhr = new XMLHttpRequest();
    xhr.onload = playASong;
    xhr.open("get", "https://api.github.com/repos/robin-drexler/isnowplayinginyourhead/contents/songs.json", true);
    xhr.setRequestHeader('Accept', 'application/vnd.github.v3.raw+json')
    xhr.send();
})();