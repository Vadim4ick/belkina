import * as migration_20250817_201152_init from './20250817_201152_init';
import * as migration_20250821_093901 from './20250821_093901';

export const migrations = [
  {
    up: migration_20250817_201152_init.up,
    down: migration_20250817_201152_init.down,
    name: '20250817_201152_init',
  },
  {
    up: migration_20250821_093901.up,
    down: migration_20250821_093901.down,
    name: '20250821_093901'
  },
];
