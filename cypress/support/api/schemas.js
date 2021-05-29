import spok from 'cy-spok'

class Schemas {
  getMovieSchema() {
    return spok({
      Title: spok.string,
      Year: spok.string,
      Language: spok.startsWith('English'),
      Language: spok.endsWith('French')
    })
  }
}

export default new Schemas()