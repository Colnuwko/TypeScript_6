import { transport } from "./my_lab_6"
import car = transport.car
import Car = transport.Car
// import IOwner = transport.IOwner
// import Owner = transport.Owner
// import motorbike = transport.motorbike
// import Motorbike = transport.Motorbike
// import Ivehicle = transport.Ivehicle
// import Vehicle = transport.Vehicle
import IVehicleStorage = transport.IVehicleStorage
import VehicleStorage = transport.VehicleStorage
// import types_doc = transport.types_doc


const dodg: car = new Car('Dodge2', 'Challenger', '1974', '1HGCM82633A123456', 'У821НН');
const camry: car = new Car('Toyota', 'Camry', '2023', ' 2C4RDGBG5KR123789 ', 'К530КА');


Object.defineProperty(dodg, 'age', { value: 17});

console.log(dodg.age)

console.log(dodg.get_model());
// const owner: IOwner = new Owner(new Date(), 'Денис', 'Анатольевич', types_doc.Passport, '6322', '563823');

// dodg.owner = owner;

// const ural: motorbike = new Motorbike('Ural', 'М-62', '1965', 'JH2SC5900DK100264', 'ABC123');
// const IW: motorbike = new Motorbike('ИЖ', 'Лидер', '1989', 'JH2SC5900DK100264', 'СИВ472');

// ural.owner = owner;

// const kia: Ivehicle = new Vehicle('киа', 'Рио', '2015', 'JH2SC5900DK100264', 'У821НН');
// const hunday: Ivehicle = new Vehicle('Хендай', 'Солярис', '2014' , '2C4RDGBG5KR123789', 'A001ПР');

const carStorage: IVehicleStorage<car> = new VehicleStorage();
carStorage.save(dodg);
carStorage.save(camry);

// const motoStorage: IVehicleStorage<motorbike> = new VehicleStorage();
// motoStorage.save(IW);
// motoStorage.save(ural);

// const vehicleStorage: IVehicleStorage<Ivehicle> = new VehicleStorage();
// vehicleStorage.save(dodg);
// vehicleStorage.save(camry);
// vehicleStorage.save(ural);
// vehicleStorage.save(IW);
// vehicleStorage.save(kia);
// vehicleStorage.save(hunday);

// vehicleStorage.remove(0);

// console.log(vehicleStorage.getAll());
console.log(carStorage.getAll());
// console.log(motoStorage.getAll());
// console.log(vehicleStorage.getAll());



