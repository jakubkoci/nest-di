import { NestFactory } from "@nestjs/core";
import { Module, Injectable } from "@nestjs/common";

@Injectable()
class AppService {
  constructor(private appRepository: AppRepository) {}
  sayHi() {
    console.log("app service");
    this.appRepository.sayHi();
  }
}

@Injectable()
class AppRepository {
  sayHi() {
    console.log("app repository");
    console.log("Hello");
  }
}

@Module({
  imports: [],
  providers: [AppService, AppRepository]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log(app)
  const service = app.get<AppService>(AppService);
  service.sayHi();
}

bootstrap();
