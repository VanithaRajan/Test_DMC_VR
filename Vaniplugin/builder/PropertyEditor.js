sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (ResourceModel, PropertyEditor) {
    "use strict";
    
    var oFormContainer;

    return PropertyEditor.extend( "shoubii.custom.plugins.Vaniplugin.Vaniplugin.builder.PropertyEditor" ,{

		constructor: function(sId, mSettings){
			PropertyEditor.apply(this, arguments);
			
			this.setI18nKeyPrefix("customComponentListConfig.");
			this.setResourceBundleName("shoubii.custom.plugins.Vaniplugin.Vaniplugin.i18n.builder");
			this.setPluginResourceBundleName("shoubii.custom.plugins.Vaniplugin.Vaniplugin.i18n.i18n");
		},
		
		addPropertyEditorContent: function(oPropertyFormContainer){
			var oData = this.getPropertyData();
			
			this.addSwitch(oPropertyFormContainer, "backButtonVisible", oData);
			this.addSwitch(oPropertyFormContainer, "closeButtonVisible", oData);
						
			this.addInputField(oPropertyFormContainer, "title", oData);
			this.addInputField(oPropertyFormContainer, "text", oData);

            oFormContainer = oPropertyFormContainer;
		},
		
		getDefaultPropertyData: function(){
			return {
				
				"backButtonVisible": true,
				"closeButtonVisible": true,
                "title": "Vaniplugin",
				"text": "Vaniplugin"
                
			};
		}

	});
});