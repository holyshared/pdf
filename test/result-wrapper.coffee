describe 'ResultWrapper', ->
  before ->
    @pdf = path.resolve __dirname, 'fixtures/report.pdf'
    @result = new PDFResult null, @pdf
    @wrapper = new ResultWrapper @result

  beforeEach ->
    unlink '/tmp/file.pdf'

  describe 'saveAs()', ->
    it 'will be saved in the specified path', ->
      @wrapper.saveAs('/tmp/file.pdf').then ->
        fs.stat '/tmp/file.pdf', (err, stats) ->
          assert.ok err == null
          assert.ok stats != null

  describe 'pipe()', ->
    it 'converted to stream', ->
      stream = fs.createWriteStream('/tmp/file.pdf')
      @wrapper.pipe(stream)

      fs.stat '/tmp/file.pdf', (err, stats) ->
        assert.ok err == null
        assert.ok stats != null

  describe 'bufferize()', ->
    it 'converted to buffer', ->
      @wrapper.bufferize().then (buffer) ->
        assert.ok buffer instanceof Buffer
