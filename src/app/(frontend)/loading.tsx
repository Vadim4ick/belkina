import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="flex size-8 animate-spin items-center justify-center" />
    </div>
  )
}

export default Loading
