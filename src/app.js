// class Drone{
//     constructor(id){
//         this._id = id;
//         this.name = name;
//     }
//     static getCompany(){
//         console.log('in getCompany');
//     }
//     fly(){
//         console.log('Drone ' + this.id + ' is flying');
//     }
// }
// Drone.maxHeight = 2000;
// let drone = new Drone('A123', 'Flyer');
// let drone2 = new Drone('B456', 'Twirl');

// drone.fly();
// drone2.fly();

// Drone.getCompany();

// class Drone{
//     constructor(id){
//         this._id = id;
//     }
//     get id(){
//         console.log('in id getter');
//         return this._id + ' TEMPORARY';
//     }

//     set id(value){
//         this._id = value;
//     }
// }
// let drone = new Drone('A123');
// drone.id = 'B456';
// console.log('drone id ' + drone.id);

// class Vehicle{
//     constructor(licenseNumber){
//         this.licenseNumber = licenseNumber;
//         this.gpsEnabled = true;
//         console.log('constructing vehicle');
//     }
//     start(){
//         console.log('starting vehicle');
//     }
//     static getCompanyName(){
//         console.log('My Company');
//     }
// }

// class Drone extends Vehicle{

// }

// class Car extends Vehicle {
//     constructor(licenseNumber){
//         super(licenseNumber);
//         this.gpsEnabled = false;
//         console.log('constructing car');
//     }
//     start(){
//         super.start();
//         console.log('starting car');
//     }
//       static getCompanyName(){
//           super.getCompanyName();
//         console.log('My Other Company');
//     }
// }

// let c = new Car('A123');
// c.start();
// Car.getCompanyName();
// console.log(c instanceof Object);
// console.log(c.licenseNumber);
// console.log(c.gpsEnabled);

// let d = new Drone();

import $ from 'jquery';
//import {Car} from './classes/car.js';
//import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
// import {Button} from './ui/button.js';
// import {Image} from './ui/image.js';
// import {TitleBar} from './ui/title-bar.js';
// import {DataTable} from './ui/data-table.js';
// import {GoogleMap} from './ui/google-map.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';
import {CarPage} from './pages/car-page.js';
import {MapPage} from './pages/map-page.js';

export class App extends ApplicationBase {
    constructor() {
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarPage());
        this.addRoute('Drones', null);
        this.addRoute('Map', new MapPage());
    }
}

export let application = new App();
application.show($('body'));

// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// let car = dataService.getCarByLicense('AT9900');
// console.log(car);
// console.log('**************************')

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars) {
//     console.log(car.license);
// }
// console.log('**************************')

// let carss = dataService.filterCarsByMake('e');
// for (let car of carss) {
//     console.log(car.make);
// }
// console.log('**************************')

// for (let car of dataService.cars) {
//     console.log(car.license);
// }
// console.log('**************************')
// for (let e of dataService.errors) {
//     console.log(e.message);
// }

// let tb = new TitleBar('Our Application');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let i = new Image('../images/drone.png');
// i.appendToElement($('body'));

// let headers = 'License Make Model Miles'.split(' ');
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));

// let centerOfMap = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(centerOfMap, dataService.cars);
// map.appendToElement($('body'));