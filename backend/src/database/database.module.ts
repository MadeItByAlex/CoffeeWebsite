import { Module ,forwardRef } from '@nestjs/common';
import { SeedService } from './seed/seed.service';
import { AppModule } from 'src/app.module';


@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [SeedService],
  exports: [SeedService],
})
export class DatabaseModule {}
