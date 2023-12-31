import { Controller, Get, Header, Headers, HttpCode, HttpStatus, Param, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import { of } from "rxjs";
import { Request, Response } from "express";
import { User } from "src/models/user.model";

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

  @Post("/status")
  @HttpCode(HttpStatus.OK) // HttpCode : to get use the http code functionality, HttpStatus is used to set the response status using string
  status(@Req() req: Request, @Res({ passthrough: true }) res: Response) { // in response "passthrough" is used to pass the strictness of response
    const body = {
      id: req.body.id,
      name: req.body.name,
    }

    res.status(201);

    return body;
  }

  @Post("/header")
  @Header("X-Name", "Chander Raaj") // setting headers
  header(@Req() req: Request) {
    const body = {
      id: req.body.id,
      name: req.body.name,
    }

    return { body };
  }


  // static routing
  @Get("/one")
  @Redirect("/users/two", 302)
  redirectOne() {
    return "redirectOne";
  }

  @Get("/two")
  redirectTwo() {
    return { response: "I am comming from redirect One! Request" };
  }

  // dynamic routing
  @Get("/do")
  @Redirect()
  redirectDOne() {
    const rn = Math.round(Math.random() * 10);
    if (rn < 5) {
      return { url: "/users/dt", statusCode: 302 };
    } else {
      return { url: "/users/two", statusCode: 302 };
    }
  }


  @Get("/dt")
  redirectDTwo() {
    return { response: "I am comming from Dynamic redirect One! Request" };
  }
  // you can use patch, put, delete also along with your logic

  // route parameters
  // particular route
  @Get("/:id")
  routeParameterSingle(@Param("id") id: number) {
    return { id };
  }

  // object base route
  @Get("/:id/:name")
  routeParameterObject(@Param() params: User) {
    return { params };
  }

  // query parameters
  @Get()
  queryParam(@Query() query: Record<string, any>) {
    return { query_params: query };
  }

  /*
  @Header: Set Response Header
  @Headers: Extract Request Headers
  */

  @Post("/header/fetch")
  extractHeader(@Headers() head: Record<string, any>) {
    console.log(head);
    return { head };
  }
}