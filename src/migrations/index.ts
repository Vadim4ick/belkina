import * as migration_20250814_142153 from './20250814_142153';
import * as migration_20250815_110536 from './20250815_110536';

export const migrations = [
  {
    up: migration_20250814_142153.up,
    down: migration_20250814_142153.down,
    name: '20250814_142153',
  },
  {
    up: migration_20250815_110536.up,
    down: migration_20250815_110536.down,
    name: '20250815_110536'
  },
];
