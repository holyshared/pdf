describe 'PDFExpoter', ->
  describe 'render()', ->
    before ->
      @adapter = new JadeAdapter
      @renderer = new Renderer @adapter
      @exporter = new PDFExpoter @renderer
    it 'returns render content', ->
      @timeout 3000
      template = path.resolve(__dirname, 'fixtures/content.jade')

      @exporter.render(template, { title: 'jade' }).then (result) ->
        stream = result.toStream()
        assert.ok(stream instanceof Readable)
