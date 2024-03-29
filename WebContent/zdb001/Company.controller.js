sap.ui.controller("zdb001.Company", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zdb001.Company
*/
	onInit: function() {
         
		// instantiate model
		var oModel = new sap.ui.model.json.JSONModel();
		
		// load data
		oModel.loadData("model/companyData.json");
		
		// setting model to the view
		this.getView().setModel(oModel);
		
		var oTxt1 = this.getView().byId("idTxt1");
		
		oTxt1.bindProperty("text","/companyName");
		
		var oTxt2 = this.getView().byId("idTxt2");
		
		oTxt2.bindProperty("text", "/city");
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zdb001.Company
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zdb001.Company
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zdb001.Company
*/
//	onExit: function() {
//
//	}

});