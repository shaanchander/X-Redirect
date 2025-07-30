setInterval(replaceLinks, 1000)

function replaceLinks() {

    var anchors = document.getElementsByTagName("a");

    for (var i = 0; i < anchors.length; i++) {

        try {

            const url = new URL(anchors[i].href);
            const hostname = url.hostname.replace(/^www\./, '');
            
            if (hostname === 'x.com' || hostname === 'twitter.com') {
                console.log('matched url (replacing):', anchors[i].href);
                anchors[i].href = `https://xcancel.com${url.pathname}${url.search}${url.hash}`;

            }

        } catch { continue; } // probably invalid link - skipping

    }

}