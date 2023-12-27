import { Body, Delete, Get, Injectable, Param, Post, Put } from "@nestjs/common";
import { Car } from "src/models/car.model";

let CARS = []

@Injectable()
export class CarService {

  // get cars
  list() {
    return { cars: CARS }
  }

  // get car by id
  fetchById(id: number) {
    const car = CARS.find((car) => +car.id === +id)
    return { car }
  }

  // save car
  save(@Body() body: Car) {
    CARS.push(body);
    return { CARS }
  }

  // edit car
  update(id: number, albumBody: Car) {
    const albumIdx = CARS.findIndex((car) => +car.id === +id)

    if (!albumIdx) return;

    CARS[albumIdx] = albumBody;
  }

  // delete car
  delete(id: number) {
    CARS = CARS.filter((album) => +album.id !== id);
  }
}