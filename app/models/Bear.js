class Bear {
  constructor(
      name = '',
      color = '',
      gender = '',
      weight = 0,
      teethSize = '',
  ) {
      this.id = 0,
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.teethSize = teethSize;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}

export default Bear;