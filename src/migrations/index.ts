import * as migration_20250814_142153 from './20250814_142153'
import * as migration_20250815_110536 from './20250815_110536'
import * as migration_20250816_175849_seo_field_for_home_page from './20250816_175849_seo_field_for_home_page'

export const migrations = [
  {
    up: migration_20250816_184352.up,
    down: migration_20250816_184352.down,
    name: '20250816_184352',
  },
  {
    up: migration_20250816_175849_seo_field_for_home_page.up,
    down: migration_20250816_175849_seo_field_for_home_page.down,
    name: '20250816_175849_seo_field_for_home_page',
  },
]
