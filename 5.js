class Devices {
  constructor(name, voltage) {
    this.name = name;
    this.voltage = voltage;
  }
  connectToTheNetwork() {
    console.log(this.name + " was connected to the network!");
  }

  disconnectFromTheNetwork() {
    console.log(this.name + " was disconnected from the network!");
    this.voltage = 0;
  }

  static getGeneralVoltage() {
    const generalVoltage =
      pc.voltage +
      lamp.voltage +
      fridge.voltage +
      phoneCharger.voltage +
      router.voltage +
      kettle.voltage;
    return console.log("General voltage = " + generalVoltage + " W");
  }
}

const pc = new Devices("PC", 100);
const lamp = new Devices("Lamp", 50);
const fridge = new Devices("Fridge", 80);
const phoneCharger = new Devices("Phone charger", 50);
const router = new Devices("Router", 60);
const kettle = new Devices("Kettle", 120);

pc.connectToTheNetwork();
fridge.connectToTheNetwork();
router.connectToTheNetwork();
lamp.disconnectFromTheNetwork();
phoneCharger.disconnectFromTheNetwork();
kettle.disconnectFromTheNetwork();

Devices.getGeneralVoltage();