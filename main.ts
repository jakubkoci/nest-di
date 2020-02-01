import { NestFactory } from "@nestjs/core";
import { Module, Injectable } from "@nestjs/common";

@Injectable()
class AppRepository {
  sayHi() {
    console.log("app repository");
    console.log("Hello");
  }
}

@Injectable()
class AppService {
  constructor(private appRepository: AppRepository) {}
  sayHi() {
    console.log("app service");
    this.appRepository.sayHi();
  }
}

@Module({
  imports: [],
  providers: [AppService, AppRepository]
})
class AppModule {
  constructor(private appService: AppService) {}
  sayHi() {
    console.log("app module");
    this.appService.sayHi();
  }
}

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const module = app.get<AppModule>(AppModule);
  module.sayHi();
}

bootstrap();
