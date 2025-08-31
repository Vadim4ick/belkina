import * as migration_20250817_201152_init from './20250817_201152_init';
import * as migration_20250821_093901 from './20250821_093901';
import * as migration_20250823_142912_update_tests_description_to_richtext from './20250823_142912_update_tests_description_to_richtext';
import * as migration_20250824_144541 from './20250824_144541';
import * as migration_20250827_201507 from './20250827_201507';
import * as migration_20250827_203805 from './20250827_203805';
import * as migration_20250831_154953 from './20250831_154953';

export const migrations = [
  {
    up: migration_20250817_201152_init.up,
    down: migration_20250817_201152_init.down,
    name: '20250817_201152_init',
  },
  {
    up: migration_20250821_093901.up,
    down: migration_20250821_093901.down,
    name: '20250821_093901',
  },
  {
    up: migration_20250823_142912_update_tests_description_to_richtext.up,
    down: migration_20250823_142912_update_tests_description_to_richtext.down,
    name: '20250823_142912_update_tests_description_to_richtext',
  },
  {
    up: migration_20250824_144541.up,
    down: migration_20250824_144541.down,
    name: '20250824_144541',
  },
  {
    up: migration_20250827_201507.up,
    down: migration_20250827_201507.down,
    name: '20250827_201507',
  },
  {
    up: migration_20250827_203805.up,
    down: migration_20250827_203805.down,
    name: '20250827_203805',
  },
  {
    up: migration_20250831_154953.up,
    down: migration_20250831_154953.down,
    name: '20250831_154953'
  },
];
