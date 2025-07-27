var anchors = document.getElementsByTagName("a");
const regex = /\b(?:https?:\/\/)?(?:www\.)?(x\.com|twitter\.com)(\/[^\s]*)?\b/;

for (var i = 0; i < anchors.length; i++) {
    
    if (anchors[i].href.match(regex)) {
        console.log('matched url (replacing):', anchors[i].href);
        
        // Replace the domain with 'xcancel.com' and keep the path if applicable
        anchors[i].href = anchors[i].href.replace(regex, (match, domain, path) => {
            return `https://xcancel.com${path || ''}`;
        });
    }
}
