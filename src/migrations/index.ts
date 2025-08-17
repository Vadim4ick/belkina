import * as migration_20250817_175507_init from './20250817_175507_init';

export const migrations = [
  {
    up: migration_20250817_175507_init.up,
    down: migration_20250817_175507_init.down,
    name: '20250817_175507_init'
  },
];
