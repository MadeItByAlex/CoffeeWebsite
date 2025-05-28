import { Injectable,OnApplicationBootstrap } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Coffee } from 'src/data/coffee.entity';


@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    private readonly appService: AppService,
  ) {}

  async onApplicationBootstrap() {
    await this.seedCoffees();
  }

  private async seedCoffees() {
    const initialCoffees: Partial<Coffee>[] = [
      { title: 'Arabica', description: 'Smooth and aromatic.', imageUrl:'https://zippypixels.com/wp-content/uploads/2018/03/Brown-packaging-pouch-mockup.jpg', price: 5.00 },
      { title: 'Robusta', description: 'Strong and bold.',imageUrl:'https://zippypixels.com/wp-content/uploads/2018/03/Free-coffee-bag-mockup.jpg', price: 4.50 },
      { title: 'Liberica', description: 'Smoky and floral.',imageUrl:'https://zippypixels.com/wp-content/uploads/2018/03/White-coffee-bag-mockup.jpg', price: 5.50 },
    ];

    for (const coffeeData of initialCoffees) {
      const existingCoffee = await this.appService['coffeRepo'].findOne({ where: { title: coffeeData.title } }); // Accessing private repo for simplicity in this example
      if (!existingCoffee) {
        await this.appService.addCoffee(coffeeData);
        console.log(`Seeded coffee: ${coffeeData.title}`);
      }
    }
  }
}