var cuwebctmulti = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("cuwebctmulti-strings");
  },

  onMenuItemCommand: function(e) {
    var cookieManager = Components.classes["@mozilla.org/cookiemanager;1"]
                    .getService(Components.interfaces.nsICookieManager);
    cookieManager.remove("lms.carleton.ca", "uid2", "/webct/", false);
    var browser = getBrowser();
	var referrer = Components.classes["@mozilla.org/network/simple-uri;1"].
                       createInstance(Components.interfaces.nsIURI);
	var tab = browser.addTab("http://lms.carleton.ca",referrer,"utf-8");

  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    cuwebctmulti.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { cuwebctmulti.onLoad(); }, false);
