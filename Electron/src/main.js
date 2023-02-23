// Inject into site:
var extraCSS = [""
    ,"#DivTopBar, #DivCookiesMessageNew, #DivFooterBarWrapper { display:none; }"
    // Do not display intrusive "New Activities" banner in sidebar:
    ,".DivNewActivityOverlay { margin-left: -100%; }"
    // Do not display activities that are not related to you:
    , ".SpnGroupUnreadedMarker { visibility: hidden; }"
];

const { app, BrowserView, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    const win = new BrowserWindow({ width: 1200, height: 800 })
  
    const view = new BrowserView()
    win.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width: 1200, height: 772 })
    view.setAutoResize({width:true, height:true})

    view.webContents.addListener('did-navigate', (e,u,c,t)=>{
        view.webContents.insertCSS(extraCSS.join(" ")).then(result => {
            // console.log('CSS Added Successfully')
            // console.log('Unique Key Returned ', result)
            cssKey = result;
        }).catch(error => {
            console.log(error);
        });
    });

    /**
     * Intercept specific links and open them in new window
     * aimed at pages
     */
    // view.webContents.addEventListener("dom-ready", function() {
    //     var anchors = document.getElementsByTagName("a");
    //     for (var a = 0; a < anchors.length; a++) {
    //         var anchor = anchors[a];
    //         if (anchor.getAttribute('target') == 'content_frame') {
    //             anchor.addEventListener('click', function (e) {
    //                 e.preventDefault();
    //                 webview.loadURL(e.srcElement.href);                
    //             });
    //         }
    //     }                                
    // });

    view.webContents.setWindowOpenHandler(({ url }) => {
        // Open links to external websites in system browser
        require('electron').shell.openExternal(url);
        return { action: 'deny' };
      });

    view.webContents.loadURL('https://www.stackfield.com/login.htm')

})