import * as migration_20250814_142153 from './20250814_142153';
import * as migration_20250815_110536 from './20250815_110536';
import * as migration_20250816_175849_seo_field_for_home_page from './20250816_175849_seo_field_for_home_page';
import * as migration_20250816_185455_seo_field_for_home_page_rename_to_meta from './20250816_185455_seo_field_for_home_page_rename_to_meta';

export const migrations = [
  {
    up: migration_20250814_142153.up,
    down: migration_20250814_142153.down,
    name: '20250814_142153',
  },
  {
    up: migration_20250815_110536.up,
    down: migration_20250815_110536.down,
    name: '20250815_110536',
  },
  {
    up: migration_20250816_175849_seo_field_for_home_page.up,
    down: migration_20250816_175849_seo_field_for_home_page.down,
    name: '20250816_175849_seo_field_for_home_page',
  },
  {
    up: migration_20250816_185455_seo_field_for_home_page_rename_to_meta.up,
    down: migration_20250816_185455_seo_field_for_home_page_rename_to_meta.down,
    name: '20250816_185455_seo_field_for_home_page_rename_to_meta'
  },
];
