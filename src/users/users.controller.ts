import { Controller, Get, Post, Req } from "@nestjs/common";
import { of } from "rxjs";
import { Request } from "express";

@Controller("/users") // controller decorator to declare a class as controller
export class UsersController {

  // get router
  @Get("/profile")
  getProfile() {
    return of({
      "response": "Hello Chander!"
    });
  }

  // post with request
  @Post("/data")
  saveProfile(@Req() req: Request) {
    return of({
      "body": req.body.request
    })
  }

  // you can use patch, put, delete also along with your logic
}