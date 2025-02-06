import { Controller, Get, Post, Body, UseGuards, HttpCode, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201) // Return 201 instead of 200
  async createUser(@Body() body: { name: string; email: string; password: string }) {
    console.log('Received body:', body); // Debugging
    return this.userService.createUser(body.name, body.email, body.password);
  }

  @Get()
  @HttpCode(200) // Return 200
  // @UseGuards(AuthGuard('jwt')) // Protect this route
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  @HttpCode(200) // Return 200
  // @UseGuards(AuthGuard('jwt')) // Protect this route
  async getUser(@Param('id') id: string) {
    return this.userService.getUser(Number(id));
  }

  @Put(':id')
  @HttpCode(200) // Return 200
  // @UseGuards(AuthGuard('jwt')) // Protect this route
  async updateUser(@Param('id') id: string, @Body() body: { name: string; email: string; password: string }) {
    return this.userService.updateUser(Number(id), body);
  }

  @Delete(':id')
  @HttpCode(204) // Return 204
  // @UseGuards(AuthGuard('jwt')) // Protect this route
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
