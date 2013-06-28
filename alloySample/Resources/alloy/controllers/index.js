function Controller() {
    function popUp() {
        alert("win1");
        $.win1.close();
        $.win2.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win1 = Ti.UI.createWindow({
        backgroundColor: "#F7F3F7",
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    $.__views.firstNameTxt = Ti.UI.createTextField({
        color: "#336699",
        top: "10dp",
        left: "10",
        width: "440",
        height: "70",
        hintText: "First Name",
        id: "firstNameTxt",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.win1.add($.__views.firstNameTxt);
    $.__views.lastNameTxt = Ti.UI.createTextField({
        color: "#336699",
        top: "80",
        left: "10",
        width: "440",
        height: "70",
        hintText: "Last Name",
        id: "lastNameTxt",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.win1.add($.__views.lastNameTxt);
    $.__views.textArea = Ti.UI.createTextArea({
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "5",
        color: "#888",
        textAlign: "left",
        top: "150",
        width: "440",
        height: "70",
        left: "10",
        hintText: "Address",
        id: "textArea"
    });
    $.__views.win1.add($.__views.textArea);
    $.__views.What_Happened = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        borderRadius: "5",
        id: "What_Happened",
        title: "submit"
    });
    $.__views.win1.add($.__views.What_Happened);
    popUp ? $.__views.What_Happened.addEventListener("click", popUp) : __defers["$.__views.What_Happened!click!popUp"] = true;
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#F7F3F7",
        id: "win2"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.label2 = Ti.UI.createLabel({
        text: "I am Window 2",
        id: "label2",
        color: "#999"
    });
    $.__views.win2.add($.__views.label2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win1.open();
    __defers["$.__views.What_Happened!click!popUp"] && $.__views.What_Happened.addEventListener("click", popUp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;