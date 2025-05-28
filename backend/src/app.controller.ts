import { Controller, Get,Post,Body } from '@nestjs/common';
import { Coffee } from './data/coffee.entity';
import { AppService } from './app.service';


@Controller('coffees')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Promise<Coffee[]> {
    return this.appService.getAllCoffees();
  }

  @Post()
  async create(@Body() coffeData: Partial<Coffee>){
    return this.appService.addCoffee(coffeData);

  }
}
