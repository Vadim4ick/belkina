'use client'

import { useField } from '@payloadcms/ui'
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { KinescopeVideoItem } from '@/shared/types/kinescope.types'
import { useGqlClient } from '@/shared/hooks/useGqlClient'

const KinescopeProjectSelect: React.FC<{ path: string }> = ({ path }) => {
  const gql = useGqlClient({})

  const { value = [], setValue } = useField<KinescopeVideoItem[]>({ path })

  const [projects, setProjects] = useState<Record<string, string>>({})
  const [projectId, setProjectId] = useState<string>('')
  const [tests, setTests] = useState<{ id: number; title: string }[]>([])
  const [loadingVideos, setLoadingVideos] = useState(false)

  // Загрузка проектов
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

  // Загрузка видео по проекту
  useEffect(() => {
    if (!projectId) return
    setLoadingVideos(true)

    fetch(`/api/kinescope-list?projectId=${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        const videos = data.items.map((v: any) => ({
          kinescopeId: v.id,
          title: v.title,
          duration: Math.round(v.duration),
          projectId,
          projectTitle: projects[projectId],
          test: null,
        }))
        setValue(videos)
      })
      .finally(() => setLoadingVideos(false))
  }, [projectId])

  // Загрузка тестов
  useEffect(() => {
    gql
      .GetAllTests()
      .then((res) => {
        if (res?.Tests?.docs?.length) {
          setTests(res.Tests.docs.map((t) => ({ id: t.id, title: t.title })))
        }
      })
      .catch((err) => console.error('Ошибка при загрузке тестов', err))
  }, [])

  const handleTestChange = (index: number, testId: number) => {
    const updated = [...value]
    const test = tests.find((t) => t.id === testId)
    updated[index].test = test ? { id: test.id, title: test.title } : undefined
    setValue(updated)
  }

  return (
    <div className={styles.kinescopeField}>
      <label className={styles.label}>Проект Kinescope</label>

      <select
        className={styles.select}
        value={projectId?.length > 0 ? projectId : value?.[0]?.projectId}
        onChange={(e) => setProjectId(e.target.value)}
        disabled={Object.keys(projects).length === 0}
      >
        <option value="">Выберите проект…</option>
        {Object.entries(projects).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <div className={styles.selectedProject}>
        Выбранный проект: <strong>{value?.[0]?.projectTitle || 'не выбран'}</strong>
      </div>

      {loadingVideos && <div className={styles.loading}>Загрузка видео…</div>}

      {!loadingVideos && value.length > 0 && (
        <div className={styles.videoList}>
          <h4>Видео в проекте:</h4>
          {value.map((v, index) => (
            <div key={v.kinescopeId} className={styles.videoItem}>
              <div>
                <div className={styles.videoTitle}>{v.title}</div>
                <div className={styles.videoDuration}>({v.duration} сек.)</div>
              </div>

              <select
                className={styles.selectTest}
                value={v.test?.id || ''}
                onChange={(e) => handleTestChange(index, Number(e.target.value))}
              >
                <option value="">Выбрать тест</option>
                {tests.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default KinescopeProjectSelect
