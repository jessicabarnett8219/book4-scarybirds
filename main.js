
class ScaryBird {
  
  constructor(props) {
      this.height = props.height
      this.flightless = true
      this.isExtinct = props.isExtinct
      this.name = props.name
      this.runningSpeed= props.runningSpeed
  }

  describeBird(adjective) {
      return `The ${this.name} is a big scary bird that stands ${this.height} tall and can run up to ${this.runningSpeed}. It is ${this.flightless} that it can't fly. It is ${adjective}`
  }
}

// Somali Ostrich Instance
const somaliOstrichProps = {
  height: "6.6ft",
  isExtinct: false,
  name: "Somali Ostrich",
  runningSpeed: "100mph"
}

const somaliOstrich = new ScaryBird(somaliOstrichProps);
console.log(somaliOstrich.describeBird("cute"))

// Emu Instance
const emuProps= {
  height: "5ft",
  isExtinct: false,
  name: "Emu",
  runningSpeed: "50mph"
}

const emu = new ScaryBird(emuProps);
console.log(emu.describeBird("weird"))

// Mute Swan Instance
const muteSwanProps= {
  height: "4.5ft",
  isExtinct: false,
  name: "Mute Swan",
  runningSpeed: "25mph"
}

const muteSwan = new ScaryBird(muteSwanProps);
console.log(muteSwan.describeBird("quiet"))

