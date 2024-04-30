import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.TYPEORM_CONNECTION || 'postgres',
  host: process.env.TYPEORM_HOST || '127.0.0.1',
  port: +process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || '1234',
  database: process.env.TYPEORM_DATABASE || 'datawow-test',
  logger: process.env.TYPEORM_LOGGER || 'file',
  logging: process.env.TYPEORM_LOGGING,
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  schema: process.env.TYPEORM_DROP_SCHEMA === 'true',
  entities: [__dirname + '/../**/entities/*.{js,ts}'],
}));
