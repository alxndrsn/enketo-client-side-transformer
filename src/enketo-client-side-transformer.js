EnketoClientSideTransformer = function() {
  var transformer = this;

  this.transform = function(xformUrl, onLoaded) {
    var processors = {
          html:{ p:new XSLTProcessor() },
          model:{ p:new XSLTProcessor() },
        },
        _debug_xml = function(name, value) {
          if(false) console.log('process() :: ' + name + '=' +
              new XMLSerializer().serializeToString(value));
        },
        loadProcessor = function(type, xslUrl) {
          jQuery.get(xslUrl).done(function(doc) {
            processors[type].p.importStylesheet(doc);
            processors[type].loaded = true;
            if(processors.html.loaded && processors.model.loaded) {
              process();
            }
          });
        },
        process = function() {
          jQuery.get(xformUrl).done(function(data) {
            var doc = data,
                html = processors.html.p.transformToDocument(doc),
                model = processors.model.p.transformToDocument(doc);
            _debug_xml('data', data);
            _debug_xml('html', html);
            _debug_xml('model', model);
            onLoaded({ html:html.documentElement.innerHTML,
                model:model.documentElement.innerHTML });
          });
        };

    loadProcessor('html', '/base/xslt/client-side/openrosa2html5form.xsl');
    loadProcessor('model', '/base/xslt/client-side/openrosa2xmlmodel.xsl');
  };
};
