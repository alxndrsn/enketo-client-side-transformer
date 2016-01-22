enketo-client-side-transformer
==============================

Adaptation of enketo-transformer to work on popular browsers.

# Example

(This example uses jQuery to parse strings into [`XMLDocument`](https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument) instances.)

	var htmlTransformXsltAsString = // loaded somehow
	var modelTransformXsltAsString = // loaded somehow
	var htmlTransformXslt = jQuery.parseXML(htmlTransformXsltAsString);
	var modelTransformXslt = jQuery.parseXML(modelTransformXsltAsString);

	var xformXmlAsString = // loaded somehow
	var xformXml = jQuery.parseXML(xformXmlAsString);

	function transform(xslt, xml) {
		var p = new XSLTProcessor();
		p.importStylesheet(xslt);

		var transformed = p.transformToDocument(xml);

		var root = transformed.documentElement.firstElementChild;
		return new XMLSerializer().serializeToString(root);
	}

	var formHtml = transformed(htmlTransformXslt, xformXml);
	var formModel = transformed(modelTransformXslt, xformXml);

# Requirements

## Browsers

* Firefox
* Chrome

## CLI Tools

* `xmllint`
* `npm`
