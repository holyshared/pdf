describe 'ResultWrapper', ->
  before ->
    @pdf = path.resolve __dirname, 'fixtures/report.pdf'
    @result = new PDFResult null, @pdf
    @wrapper = new ResultWrapper @result

  beforeEach ->
    stat('/tmp/file.pdf').then (stats) ->
      return if !stats.isFile()
      unlink '/tmp/file.pdf'
    .catch (err) ->
      Promise.resolve()

  describe 'saveAs()', ->
    it 'will be saved in the specified path', ->
      @wrapper.saveAs('/tmp/file.pdf').then ->
        stat('/tmp/file.pdf').then (stats) ->
          assert.ok stats != null

  describe 'pipe()', ->
    it 'converted to stream', ->
      stream = fs.createWriteStream('/tmp/file.pdf')
      @wrapper.pipe(stream)

      stat('/tmp/file.pdf').then (stats) ->
        assert.ok stats != null

  describe 'bufferize()', ->
    it 'converted to buffer', ->
      @wrapper.bufferize().then (buffer) ->
        assert.ok buffer instanceof Buffer
