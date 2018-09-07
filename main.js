class Imageable {
  constructor () {
    this.image = null
  }

  setImage (url) {
    this.image = url
    console.log(`Image has been set to ${url}`)
  }
}

class Taggable {
  constructor () {
    this.tags = []
  }

  addTag (tag) {
    this.tags.push(tag)
    console.log(`${tag} has been added to the list`)
  }

  tagCount () {
    return this.tags.length
  }
}

class Person extends Imageable {
  constructor (name) {
    super()
    this.name = name
  }

  setName (name) {
    this.name = name
  }
}

class Programmer extends Person {
  constructor () {
    super()
    console.log('Hello from Programmer class')
    this.job_title = 'Programmer'
  }
}

window.Programmer = Programmer
