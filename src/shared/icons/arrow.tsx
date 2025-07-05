const Arrow = (props: ReactTagProps<'svg'>) => {
  return (
    <svg width="18" height="18" fill="none" className="ml-1" {...props}>
      <path d="M6 3l6 6-6 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export { Arrow }
