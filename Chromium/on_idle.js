// this code will be executed after page load
(function() {
    const extraCSS = [""
        ,".quietfield #DivTopBar, .quietfield #DivCookiesMessageNew, .quietfield #DivFooterBarWrapper { display:none; }"
        // Do not display intrusive "New Activities" banner in sidebar:
        ,".quietfield .DivNewActivityOverlay { margin-left: -100%; }"
        // Do not display activities that are not related to you:
        , ".quietfield .SpnGroupUnreadedMarker { visibility: hidden; }"
        // Make sure any pickers are above the dialogs
        // , ".picker {z-index: 100002;}" // DOESN'T WORK
        // Tone down the notification badges, they are mostly not about your work but do indicate your team's progress.
        ,".quietfield .SpnGroupUnreaded.SpnGroupRed { background: rgb(68 137 228); color: rgb(204 204 204); transform: scale(0.8); }"
    ];

    const css = extraCSS.join(" ");

    var styleSheet = document.createElement("style");
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);
    document.body.classList.add("quietfield");

    console.log('Stackfield quieted down');

})();