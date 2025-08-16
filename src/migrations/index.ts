import * as migration_20250816_184352 from './20250816_184352';
import * as migration_20250816_184833 from './20250816_184833';

export const migrations = [
  {
    up: migration_20250816_184352.up,
    down: migration_20250816_184352.down,
    name: '20250816_184352',
  },
  {
    up: migration_20250816_184833.up,
    down: migration_20250816_184833.down,
    name: '20250816_184833'
  },
];
