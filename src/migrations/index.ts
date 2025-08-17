import * as migration_20250817_201152_init from './20250817_201152_init';

export const migrations = [
  {
    up: migration_20250817_201152_init.up,
    down: migration_20250817_201152_init.down,
    name: '20250817_201152_init'
  },
];
