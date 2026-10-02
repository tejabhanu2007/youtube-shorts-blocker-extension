function removeShortsContent() {

    document.querySelectorAll("ytd-reel-shelf-renderer").forEach(element => {
        element.remove();
    });

    document.querySelectorAll(
        'a[href^="/shorts/"], a[href*="youtube.com/shorts/"]'
    ).forEach(link => {

        const card =
            link.closest("ytd-rich-item-renderer") ||
            link.closest("ytd-grid-video-renderer") ||
            link.closest("ytd-video-renderer") ||
            link.closest("ytd-compact-video-renderer");

        if (card) {
            card.remove();
        }
    });
}


function blockShortsPage() {

    if (window.location.pathname.startsWith("/shorts/")) {

        
        const shortsPage = document.querySelector("ytd-shorts");

        if (shortsPage) {
            shortsPage.style.display = "none";
        }

        window.location.replace("https://www.youtube.com/");
    }
}

blockShortsPage();
removeShortsContent();

const observer = new MutationObserver(() => {

    blockShortsPage();
    removeShortsContent();

});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
