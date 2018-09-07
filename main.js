// ===============================================
// Mixin Factory
// ===============================================

let mix = (klass) => new MixinFactory(klass)

class MixinFactory {
  constructor (klass) {
    this.superClass = klass
  }

  with (...mixins) {
    // Think ruby array#inject { |mixedClass, member| ... } here
    return mixins.reduce(
      (mixedClass, mixin) => {
        return mixin(mixedClass)
      },
      this.superClass
    )
  }
}

// ===============================================
// Mixins
// ===============================================

let Imageable = (klass) => class extends klass {
  constructor () {
    super()
    this.image = null
    console.log('Image attribute is now available')
  }

  setImage (url) {
    this.image = url
    console.log(`Image has been set to ${url}`)
  }
}

let Taggable = (klass) => class extends klass {
  constructor () {
    super()
    this.tags = []
    console.log('Tags attribute is now available')
  }

  addTag (tag) {
    this.tags.push(tag)
    console.log(`${tag} has been added to the list`)
  }

  tagCount () {
    return this.tags.length
  }
}

// =================================================================

class Person {
  constructor (name) {
    this.name = name
    console.log('name has been set')
  }
}

class Programmer extends mix(Person).with(Taggable, Imageable) {
  constructor (name) {
    super()
    this.name = name
    console.log("Hello, I'm a programmer!")
  }
}

window.Programmer = Programmer
