"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = void 0;
var transport;
(function (transport) {
    let types_doc;
    (function (types_doc) {
        types_doc["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        types_doc["driver_license"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    })(types_doc = transport.types_doc || (transport.types_doc = {}));
    let types_car;
    (function (types_car) {
        types_car["hetch"] = "\u0445\u0435\u0442\u0447\u0431\u044D\u043A";
        types_car["universal"] = "\u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
    })(types_car = transport.types_car || (transport.types_car = {}));
    let clases_car;
    (function (clases_car) {
        clases_car["start"] = "start";
        clases_car["standart"] = "\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
        clases_car["premium"] = "\u043F\u0440\u0435\u043C\u0438\u0443\u043C";
        clases_car["luxary"] = "\u043B\u0443\u0445\u0430\u0440\u0438";
        clases_car["ultimate_plus_3000_gt_extra_sport"] = "\u0423\u043B\u0442\u0438\u043C\u0435\u0439\u0442 \u043F\u043B\u044E\u0441 300 \u0434\u0436\u0438\u0442\u0438 \u0435\u0445\u0442\u0440\u0430 \u0441\u043F\u043E\u0440\u0442";
    })(clases_car = transport.clases_car || (transport.clases_car = {}));
    class Vehicle {
        get owner() {
            return this._owner;
        }
        set owner(value) {
            this._owner = value;
        }
        get marka() {
            return this._marka;
        }
        set marka(value) {
            this._marka = value;
        }
        get model() {
            return this._model;
        }
        set model(value) {
            this._model = value;
        }
        get years() {
            return this._years;
        }
        set years(value) {
            this._years = value;
        }
        get vin_num() {
            return this._vin_num;
        }
        set vin_num(value) {
            this._vin_num = value;
        }
        get reg_num() {
            return this._reg_num;
        }
        set reg_num(value) {
            this._reg_num = value;
        }
        constructor(_marka, _model, _years, _vin_num, _reg_num) {
            this._marka = _marka;
            this._model = _model;
            this._years = _years;
            this._vin_num = _vin_num;
            this._reg_num = _reg_num;
        }
        vehicleInfo() {
            return 'марка - ' + this._marka + '\n модель - ' + this._model + '\nгод выпуска - ' + this._years + '\nВин номер - ' + this._vin_num + '\nРегистрационный номер' + this._reg_num;
        }
    }
    transport.Vehicle = Vehicle;
    let Car = class Car extends Vehicle {
        get types() {
            return this._types;
        }
        set types(value) {
            this._types = value;
        }
        get class() {
            return this._class;
        }
        set class(value) {
            this.class = value;
        }
        get_model() {
            return this.model;
        }
        constructor(marka, model, years, vin_num, reg_num) {
            super(marka, model, years, vin_num, reg_num);
        }
    };
    __decorate([
        uppercaseDetails
    ], Car.prototype, "get_model", null);
    Car = __decorate([
        sealed
    ], Car);
    transport.Car = Car;
    function uppercaseDetails(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Вызываем оригинальный метод и получаем его результат
            const result = originalMethod.apply(this, args);
            return result.toUpperCase();
        };
    }
    transport.uppercaseDetails = uppercaseDetails;
    function sealed(constructor) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
    transport.sealed = sealed;
    class Motorbike extends Vehicle {
        get type_ram() {
            return this.type_ram;
        }
        set type_ram(value) {
            this.type_ram = value;
        }
        get for_sport() {
            return this.for_sport;
        }
        set for_sport(value) {
            this.for_sport = value;
        }
        constructor(marka, model, years, vin_num, reg_num) {
            super(marka, model, years, vin_num, reg_num);
        }
    }
    transport.Motorbike = Motorbike;
    class Owner {
        get birthDate() {
            return this._birthDate;
        }
        set birthDate(value) {
            this._birthDate = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get surname() {
            return this._surname;
        }
        set surname(value) {
            this._surname = value;
        }
        get type_doc() {
            return this._type_doc;
        }
        set type_doc(value) {
            this._type_doc = value;
        }
        get series_doc() {
            return this._series_doc;
        }
        set series_doc(value) {
            this._series_doc = value;
        }
        get number_doc() {
            return this._number_doc;
        }
        set number_doc(value) {
            this._number_doc = value;
        }
        constructor(birthDate, name, surname, type_doc, series_doc, number_doc) {
            this._birthDate = birthDate;
            this._name = name;
            this._series_doc = series_doc;
            this._number_doc = number_doc;
            this._surname = surname;
            this._type_doc = type_doc;
        }
        ownerInfo() {
            return 'name: ' + this._name + '\n surname: ' + this._surname + '\n день рождения: ' + this.birthDate.toString() + '\nтип документа' + this._type_doc + '\nсерия документа' + this._series_doc + '\nНомер документа' + this._number_doc;
        }
    }
    transport.Owner = Owner;
    class VehicleStorage {
        get created() {
            return this._created;
        }
        get data() {
            return this._data;
        }
        constructor() {
            this._created = new Date();
            this._data = [];
        }
        getAll() {
            return this.data;
        }
        remove(index) {
            this.data.splice(index, 1);
        }
        save(data) {
            this._data.push(data);
        }
    }
    transport.VehicleStorage = VehicleStorage;
})(transport || (exports.transport = transport = {}));
