import { Controller, Get, Ip } from "@nestjs/common";

@Controller("/tuts/")
export class TutorialController {

  // getting ip
  @Get("/ip")
  getIP(@Ip() ip: string) {
    console.log(ip);
    return { ip }
  }

  
}