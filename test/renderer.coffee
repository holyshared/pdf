describe 'Renderer', ->
  describe 'render()', ->
    before ->
      @renderer = new Renderer {
        render: (template, values) ->
          Bluebird.resolve 'content'
      }
    it 'returns render content', ->
      @renderer.render('test.html', {}).then (content) ->
        assert(content == 'content')
