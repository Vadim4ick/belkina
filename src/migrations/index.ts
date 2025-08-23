import * as migration_20250817_201152_init from './20250817_201152_init';
import * as migration_20250821_093901 from './20250821_093901';
import * as migration_20250823_142912_update_tests_description_to_richtext from './20250823_142912_update_tests_description_to_richtext';

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
    name: '20250823_142912_update_tests_description_to_richtext'
  },
];
