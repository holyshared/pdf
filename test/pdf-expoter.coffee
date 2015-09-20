describe 'PDFExpoter', ->
  describe 'render()', ->
    before ->
      @exporter = exporter(jade())
    it 'returns render content', ->
      @timeout 3000
      template = path.resolve(__dirname, 'fixtures/content.jade')
      js = path.resolve(__dirname, 'fixtures/main.js')
      css = path.resolve(__dirname, 'fixtures/style.css')

      @exporter.stylesheet css
        .javascript js
        .layout format: 'A4', orientation: 'portrait'
        .render(template, { title: 'jade' }).then (result) ->
          stream = result.toStream()
          assert.ok(stream instanceof Readable)
