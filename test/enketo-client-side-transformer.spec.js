var assert = chai.assert;

describe('enketo-client-side-transformer spec', function() {
  it('should allow assertions', function() {
    assert.ok(true);
  });

  it('should launch the browser and output some logging', function() {
    console.log('[console.log()] Testing 1, 2, 3...');
    console.error('[console.error()] Testing 1, 2, 3...');
  });
});

describe('transformations', function() {
  var enketo_client_side_transformer;
  beforeEach(function() {
    enketo_client_side_transformer = new EnketoClientSideTransformer();
  });

  [
      'dosages',
      'hospital-survey',
      'households',
      'pregnancy',
      'visit-report',
  ].forEach(function(xform) {
    it('should be output for ' + xform, function(done) {
      enketo_client_side_transformer.transform('/base/xforms/' + xform + '.xml',
          function(transformed) {
            console.log('[TRANSFORMED] ' + JSON.stringify({
              name:xform, content:transformed }));
            done();
          });
    });
  });
});

describe('EnketoClientSideTransformer', function() {
  it('should be a function', function() {
    assert.typeOf(EnketoClientSideTransformer, 'function');
  });

  describe('instance', function() {
    var enketo_client_side_transformer;
    beforeEach(function() {
      enketo_client_side_transformer = new EnketoClientSideTransformer();
    });

    describe('#transform()', function() {
      it('should be available', function() {
        assert.typeOf(enketo_client_side_transformer.transform, 'function');
      });
    });
  });
});
