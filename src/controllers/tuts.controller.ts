import { Controller, Get, Inject, Ip } from "@nestjs/common";

@Controller("/tuts/")
export class TutorialController {

  constructor(@Inject("TOKEN_SERVICE") private tokenService: string) {
    console.log(tokenService);

  }

  // getting ip
  @Get("/ip")
  getIP(@Ip() ip: string) {
    console.log(ip);
    return { ip }
  }


}