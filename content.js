function removeShortsContent() {

    // --------------------------------------------------
    // 1. Remove the Shorts shelf from normal YouTube pages
    // --------------------------------------------------

    document.querySelectorAll("ytd-reel-shelf-renderer").forEach(element => {
        element.remove();
    });


    // --------------------------------------------------
    // 2. Remove individual Shorts cards
    // --------------------------------------------------

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


// --------------------------------------------------
// 3. Block the actual Shorts page
// --------------------------------------------------

function blockShortsPage() {

    if (window.location.pathname.startsWith("/shorts/")) {

        // Hide the Shorts interface immediately
        const shortsPage = document.querySelector("ytd-shorts");

        if (shortsPage) {
            shortsPage.style.display = "none";
        }

        // Send the user back to YouTube Home
        window.location.replace("https://www.youtube.com/");
    }
}


// Run when script starts
blockShortsPage();
removeShortsContent();


// --------------------------------------------------
// 4. Watch for YouTube's dynamic page changes
// --------------------------------------------------

const observer = new MutationObserver(() => {

    blockShortsPage();
    removeShortsContent();

});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});