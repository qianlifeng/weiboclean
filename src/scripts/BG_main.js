chrome.browserAction.onClicked.addListener(onClickIcon);

/**
 * @brief 用户点击图标的时候触发
 *
 * @return 无 
 */
function onClickIcon(){
    var url = 'http://www.weibo.com';
    chrome.tabs.getAllInWindow(undefined, function(tabs) {
        for (var i = 0, tab; tab = tabs[i]; i++) {
          if (tab.url && tab.url.toString().indexOf("weibo.com") != -1) {
            chrome.tabs.update(tab.id, {selected: true});
            return;
          }
        }
        chrome.tabs.create({url: url});
    });
}
