describe 'JadeAdapter', ->
  describe 'render()', ->
    before ->
      @adapter = new JadeAdapter
    it 'returns render content', ->
      template = path.resolve(__dirname, 'fixtures/content.jade')
      @adapter.render(template, { title: 'jade' }).then (content) ->
        assert.equal(content, '<!DOCTYPE html><html lang="en"><head><title>jade</title></head><body><h1>jade</h1></body></html>')
