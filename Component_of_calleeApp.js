// define a new UIComponent

jQuery.sap.declare("zui5_conf_try.Component");

jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.table.Table");

sap.ui.localResources('views');
sap.ui.resource('models');

//new Component
sap.ui.core.UIComponent.extend('zui5_conf_try.Component',{	
	metadata : {
		version : "1.0",
		dependencies : {
			//version : "1.8",
			libs : [ "sap.ui.core" ]
		}
	}
});

/*
 * create the content
 */
zui5_conf_try.Component.prototype.createContent = function(){
	this.view = sap.ui.jsview("idHome", "views.Home");
	return this.view;
};
   
   


