var plugins = document.getElementById("plugins-link");
var bundles = document.getElementById("bundles-link");
var pluginMenu = document.getElementsByClassName("dropdown-content")[0];
var bundlesMenu = document.getElementsByClassName("dropdown-content")[1];

plugins.onmouseover = function(){showPluginMenu(pluginMenu)};
plugins.onmouseout = function(){setTimout(hidePluginMenu(pluginMenu),1000)};
pluginMenu.onmouseover = function(){showPluginMenu(pluginMenu)};
pluginMenu.onmouseout = function(){hidePluginMenu(pluginMenu)};

bundles.onmouseover = function(){showPluginMenu(bundlesMenu)};
bundles.onmouseout = function(){setTimout(hidePluginMenu(bundlesMenu),1000)};
bundlesMenu.onmouseover = function(){showPluginMenu(bundlesMenu)};
bundlesMenu.onmouseout = function(){hidePluginMenu(bundlesMenu)};

function showPluginMenu(x) {
    //document.getElementsByClassName("dropdown-content").style.display = "block";
    pluginMenu.style.display="none";
    bundlesMenu.style.display="none";
    x.style.display="block";
}

function hidePluginMenu() {
    //document.getElementsByClassName("dropdown-content").style.display = "none";
    pluginMenu.style.display="none";
    bundlesMenu.style.display="none";
}