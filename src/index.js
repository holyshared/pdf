export class Renderer {
  constructor(adapter) {
    this.adapter = adapter;
  }
  render(template, values) {
    return this.adapter.render(template, values);
  }
}
