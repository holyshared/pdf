describe 'PDFExpoter', ->
  describe 'render()', ->
    before ->
      @exporter = exporter({
        render: (template) ->
          new Promise (resolve, reject) ->
            fs.readFile template, (err, content) ->
              return reject(err) if err
              resolve content.toString()
      })
    it 'returns render content', ->
      @timeout 3000
      template = path.resolve(__dirname, 'fixtures/content.html')
      js = path.resolve(__dirname, 'fixtures/main.js')
      css = path.resolve(__dirname, 'fixtures/style.css')

      @exporter.stylesheet css
        .javascript js
        .layout format: 'A4', orientation: 'portrait'
        .render(template, { title: 'test' }).then (result) ->
          stream = result.toStream()
          assert.ok(stream instanceof Readable)
