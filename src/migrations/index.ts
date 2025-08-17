import * as migration_20250817_144404_initial_schema from './20250817_144404_initial_schema';
import * as migration_20250817_150053_banner_desc_field from './20250817_150053_banner_desc_field';
import * as migration_20250817_161125_mainOfferBanner_desc_field_renamed_to_description from './20250817_161125_mainOfferBanner_desc_field_renamed_to_description';

export const migrations = [
  {
    up: migration_20250817_144404_initial_schema.up,
    down: migration_20250817_144404_initial_schema.down,
    name: '20250817_144404_initial_schema',
  },
  {
    up: migration_20250817_150053_banner_desc_field.up,
    down: migration_20250817_150053_banner_desc_field.down,
    name: '20250817_150053_banner_desc_field',
  },
  {
    up: migration_20250817_161125_mainOfferBanner_desc_field_renamed_to_description.up,
    down: migration_20250817_161125_mainOfferBanner_desc_field_renamed_to_description.down,
    name: '20250817_161125_mainOfferBanner_desc_field_renamed_to_description'
  },
];
