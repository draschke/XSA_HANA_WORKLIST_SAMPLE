jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"orders/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"orders/test/integration/pages/Worklist",
		"orders/test/integration/pages/Object",
		"orders/test/integration/pages/NotFound",
		"orders/test/integration/pages/Browser",
		"orders/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "orders.view."
	});

	sap.ui.require([
		"orders/test/integration/WorklistJourney",
		"orders/test/integration/ObjectJourney",
		"orders/test/integration/NavigationJourney",
		"orders/test/integration/NotFoundJourney",
		"orders/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
