/* eslint-disable @typescript-eslint/no-explicit-any */
// Отдельно опишем вложенные объекты, которые часто встречаются
interface KinescopePoster {
  src: string
  width?: number
  height?: number
}

interface KinescopeAsset {
  id: string
  type: string
  src: string
  // Можно добавить дополнительные поля, если они встречаются
}

interface KinescopeChapter {
  id: string
  title: string
  start: number
  // и другие поля, если есть
}

interface KinescopeMetaPagination {
  page: number
  per_page: number
  total: number
}

interface KinescopeMetaOrder {
  [key: string]: 'asc' | 'desc'
}

interface KinescopeMeta {
  pagination: KinescopeMetaPagination
  order: KinescopeMetaOrder
}

export interface KinescopeVideo {
  id: string
  project_id: string
  folder_id: string | null
  player_id: string
  version: number
  title: string
  subtitle: string
  description: string
  status: string
  progress: number
  duration: number
  assets: KinescopeAsset[]
  chapters: KinescopeChapter[]
  privacy_type: string
  privacy_domains: string[]
  privacy_share: Record<string, unknown>
  tags: string[]
  poster?: KinescopePoster
  additional_materials: any[] // если знаешь структуру — опиши!
  additional_materials_enabled: boolean
  play_link: string
  embed_link: string
  created_at: string
  updated_at: string
  subtitles: any[] // если знаешь структуру — опиши!
  subtitles_enabled: boolean
  hls_link: string
}

export interface KinescopeVideosResponse {
  meta: KinescopeMeta
  data: KinescopeVideo[]
}
