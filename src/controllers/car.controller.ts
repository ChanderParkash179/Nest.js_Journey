import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Car } from "src/models/car.model";
import { CarService } from "src/services/car.service";

@Controller("/car")
export class CarController {

  // dependency injection
  constructor(private carService: CarService) { }

  // get albums
  @Get()
  list() {
    return this.carService.list();
  }

  // get album by id
  @Get("/:id")
  fetchById(@Param("id") id: number) {
    return this.carService.fetchById(id)
  }

  // save album
  @Post()
  save(@Body() body: Car) {
    return this.carService.save(body)
  }

  // edit album
  @Put("/:id")
  update(@Param("id") id: number, @Body() albumBody: Car) {
    return this.carService.update(id, albumBody);
  }

  // delete album
  @Delete("/:id")
  delete(@Param("id") id: number) {
    return this.carService.delete(id);
  }
}