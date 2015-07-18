var assert = chai.assert;

describe('enketo-client-side-transformer spec', function() {
  it('should allow assertions', function() {
    assert.ok(true);
  });

  it('should have acccess to log4js', function() {
    assert.ok(log4js);
  });

  it('should launch the browser and output some logging', function() {
    console.log('[console.log()] Testing 1, 2, 3...');
    console.error('[console.error()] Testing 1, 2, 3...');
  });
});

describe('enketo-client-side-transformer', function() {
  it('should be defined', function() {
    assert.ok(enketo_client_side_transformer);
  });

  describe('#transform()', function() {
    it('should be available', function() {
      assert.typeOf(enketo_client_side_transformer.transform, 'function');
    });
  });
});
