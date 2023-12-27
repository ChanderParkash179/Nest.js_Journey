import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Album } from "src/models/album.model";


let ALBUM = [];

@Controller("/album")
export class AlbumController {

  // get albums
  @Get()
  list() {
    return { albums: ALBUM }
  }

  // get album by id
  @Get("/:id")
  fetchById(@Param("id") id: number) {
    const album = ALBUM.find((album) => +album.id === +id)
    return { album }
  }

  // save album
  @Post()
  save(@Body() body: Album) {
    ALBUM.push(body);
    return { ALBUM }
  }

  // edit album
  @Put("/:id")
  update(@Param("id") id: number, @Body() albumBody: Album) {
    const albumIdx = ALBUM.findIndex((album) => +album.id === +id)

    if (!albumIdx) return;

    ALBUM[albumIdx] = albumBody;
  }

  // delete album
  @Delete("/:id")
  delete(@Param("id") id: number) {
    ALBUM = ALBUM.filter((album) => +album.id !== id);
  }
}