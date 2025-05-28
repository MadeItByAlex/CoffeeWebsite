import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Coffee } from './data/coffee.entity';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-challenge-db',
      entities: [Coffee],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Coffee]),
    DatabaseModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],

})
export class AppModule {}
