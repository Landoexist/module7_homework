class Devices {
  constructor(name, voltage) {
    this.name = name;
    this.voltage = voltage;
    generalVoltage = 0;
  }
  connectToTheNetwork() {
    console.log(this.name + " was connected to the network!");
    generalVoltage += this.voltage;
  }

  disconnectFromTheNetwork() {
    console.log(this.name + " was disconnected from the network!");
  }

  static getGeneralVoltage() {
    return console.log("General voltage = " + generalVoltage + " W");
  }
}

class Computers extends Devices {
  constructor(name, voltage, model, cpu) {
    super(name, voltage);
    this.model = model;
    this.cpu = cpu;
  }
  getInfoComputers() {
    return console.log(`${this.name} '${this.model}'. CPU: ${this.cpu}, Voltage: ${this.voltage} W`)
  }
};

class Fridge extends Devices {
  constructor(name, voltage, company) {
    super(name, voltage);
    this.company = company;
  }
  getInfoFridge() {
    return console.log(`${this.name} from '${this.company}' company. Voltage: ${this.voltage} W`);
  }
};

class Routers extends Devices {
  constructor(name, voltage, brand, maxSpeed, wirelessStandart) {
    super(name, voltage);
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.wirelessStandart = wirelessStandart;
  }
  getInfoRouters() {
    return console.log(`${this.name}'s brand - '${this.brand}'. Max speed - ${this.maxSpeed} Mb/s, Standart - ${this.wirelessStandart}, Voltage: ${this.voltage} W`);
  }
};

const pc = new Computers("PC", 100, "Acer", "Core i3");
const lamp = new Devices("Lamp", 50);
const fridge = new Fridge("Fridge", 80, "Sever");
const phoneCharger = new Devices("Phone charger", 50);
const router = new Routers("Router", 60, "TP-LINK", 100, "802.11n");
const kettle = new Devices("Kettle", 120);

pc.getInfoComputers();
fridge.getInfoFridge();
router.getInfoRouters();

pc.connectToTheNetwork();
fridge.connectToTheNetwork();
router.connectToTheNetwork();
lamp.disconnectFromTheNetwork();
phoneCharger.disconnectFromTheNetwork();
kettle.disconnectFromTheNetwork();

Devices.getGeneralVoltage();
