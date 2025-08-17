import * as migration_20250817_124916_initial_schema from './20250817_124916_initial_schema';
import * as migration_20250817_133838_rename_desc_to_description from './20250817_133838_rename_desc_to_description';

export const migrations = [
  {
    up: migration_20250817_124916_initial_schema.up,
    down: migration_20250817_124916_initial_schema.down,
    name: '20250817_124916_initial_schema',
  },
  {
    up: migration_20250817_133838_rename_desc_to_description.up,
    down: migration_20250817_133838_rename_desc_to_description.down,
    name: '20250817_133838_rename_desc_to_description'
  },
];
