class AbstractVehicleFactory() {
  constructor() {
    this.types = {};
  }

  getVehicle(type, customizations) {
    const Vehicle = types[type];

    return Vehicle ? new Vehicle(customizations) : null;
  }

  registerVehicle(type, Vehicle) {
    if(Vehicle.drive && Vehicle.breakDown) {
      types[type] = Vehicle;
    }

    return AbstractVehicleFactory;
  }
}

const abstractVehicleFactory = new AbstractVehicleFactory();

abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );