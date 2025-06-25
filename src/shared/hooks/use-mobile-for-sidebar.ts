import { useMediaQuery } from 'usehooks-ts'

const useIsMobile = () => {
  return useMediaQuery('(max-width: 1024px)', {
    initializeWithValue: false,
  })
}

export default useIsMobile
