import * as migration_20250817_175507_init from './20250817_175507_init';
import * as migration_20250817_175946_mainOfferBanner_desc_field_renamed_to_description from './20250817_175946_mainOfferBanner_desc_field_renamed_to_description';

export const migrations = [
  {
    up: migration_20250817_175507_init.up,
    down: migration_20250817_175507_init.down,
    name: '20250817_175507_init',
  },
  {
    up: migration_20250817_175946_mainOfferBanner_desc_field_renamed_to_description.up,
    down: migration_20250817_175946_mainOfferBanner_desc_field_renamed_to_description.down,
    name: '20250817_175946_mainOfferBanner_desc_field_renamed_to_description'
  },
];
