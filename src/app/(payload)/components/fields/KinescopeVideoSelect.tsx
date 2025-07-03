'use client'

import { KinescopeVideo } from '@/shared/types/kinescope.types'
import { useField } from '@payloadcms/ui'
import React, { useEffect, useState, useMemo } from 'react'

import styles from './style.module.scss'

interface KinescopeVideoSelectProps {
  path: string
}

const KinescopeVideoSelect: React.FC<KinescopeVideoSelectProps> = ({ path }) => {
  const { value, setValue, errorMessage } = useField<string>({ path })

  const [videos, setVideos] = useState<KinescopeVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [projects, setProjects] = useState<Record<string, string>>({})
  const [projectFilter, setProjectFilter] = useState<string>('')

  useEffect(() => {
    fetch('/api/kinescope-projects')
      .then((res) => res.json())
      .then((data) => {
        const map: Record<string, string> = {}
        data.data.forEach((p: { id: string; name: string }) => {
          map[p.id] = p.name
        })
        setProjects(map)
      })
  }, [])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/kinescope-list')
        const data = await res.json()
        setVideos(data.items)
      } catch {
        setVideos([])
      }
      setLoading(false)
    }
    fetchVideos()
  }, [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    let arr = videos
    if (q) {
      arr = arr.filter(
        (v) =>
          v.title?.toLowerCase().includes(q) ||
          v.embed_link?.toLowerCase().includes(q) ||
          v.id?.toLowerCase().includes(q),
      )
    }
    if (projectFilter) {
      arr = arr.filter((v) => v.project_id === projectFilter)
    }
    return arr
  }, [search, videos, projectFilter])

  return (
    <div className={styles.kinescopeField}>
      <label>Видео из Kinescope</label>

      {/* Фильтр по проекту */}
      <select
        className={styles.searchInput}
        value={projectFilter}
        onChange={(e) => {
          setProjectFilter(e.target.value)
          setSearch('') // опционально: сбрасываем поиск при смене проекта
        }}
        style={{ marginBottom: 8, maxWidth: 260 }}
      >
        <option value="">Все проекты</option>
        {Object.entries(projects).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      {/* Поиск */}
      <input
        className={styles.searchInput}
        placeholder="Поиск по названию или ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />

      {/* Таблица */}
      <div style={{ maxHeight: 320, overflowY: 'auto' }}>
        {loading ? (
          <div style={{ padding: 16, color: '#94a3b8' }}>Загрузка…</div>
        ) : (
          <table className={styles.kinescopeTable}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Проект</th>
                <th>Превью</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: 16, textAlign: 'center', color: '#94a3b8' }}>
                    Ничего не найдено
                  </td>
                </tr>
              ) : (
                filtered.map((v) => (
                  <tr
                    key={v.id}
                    className={value === v.id ? styles.selected : undefined}
                    onClick={() => setValue(value === v.id ? '' : v.id)}
                  >
                    <td>{v.title}</td>
                    <td>
                      {projects[v.project_id] || (
                        <span style={{ color: '#aaa' }}>{v.project_id}</span>
                      )}
                    </td>
                    <td>
                      <a
                        href={v.play_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: '#2563eb', textDecoration: 'underline' }}
                      >
                        Смотреть
                      </a>
                    </td>
                    <td>
                      {value === v.id && <span className={styles.selectedBadge}>Выбрано</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Ошибка */}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

      {/* Превью выбранного видео */}
      {value && (
        <div className={styles.iframePreview}>
          <iframe
            src={`https://kinescope.io/embed/${value}`}
            width="320"
            height="180"
            allow="autoplay; fullscreen"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default KinescopeVideoSelect
