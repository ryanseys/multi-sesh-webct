cuwebctmulti.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ cuwebctmulti.showFirefoxContextMenu(e); }, false);
};

cuwebctmulti.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-cuwebctmulti").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { cuwebctmulti.onFirefoxLoad(); }, false);
