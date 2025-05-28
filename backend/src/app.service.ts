import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './data/coffee.entity';
import { get } from 'http';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Coffee)
        private coffeRepo: Repository<Coffee>,
    ){}


async getAllCoffees(): Promise<Coffee[]> {
    return this.coffeRepo.find();
}

 async addCoffee(coffeeData: Partial<Coffee>): Promise<Coffee | { error: string }> {
    const exists = await this.coffeRepo.findOne({
      where: { title: coffeeData.title },
    });

    if (exists) {
      return { error: 'Coffee with the same name already exists' };
    }

    const coffee = this.coffeRepo.create(coffeeData);
    return this.coffeRepo.save(coffee);
  }
}
