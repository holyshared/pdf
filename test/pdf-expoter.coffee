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
      @template = path.resolve(__dirname, 'fixtures/content.html')
      @js = path.resolve(__dirname, 'fixtures/main.js')
      @css = path.resolve(__dirname, 'fixtures/style.css')

    it 'returns ResultWrapper instance', ->
      @timeout 3000
      @exporter.stylesheet @css
        .javascript @js
        .layout format: 'A4', orientation: 'portrait'
        .render(@template, { title: 'test' }).then (result) ->
          assert.ok result instanceof ResultWrapper
