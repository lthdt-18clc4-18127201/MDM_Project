class HotelsController {
  index(req, res) {
    res.send("<h1>Hotels Page<h1>");
  }
}

module.exports = new HotelsController();
