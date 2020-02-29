import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
(async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT);
})();
