var anchors = document.getElementsByTagName("a");

for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = anchors[i].href.replace('x.com', 'xcancel.com').replace('twitter.com', 'xcancel.com')
}