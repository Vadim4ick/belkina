import { ClockIcon } from '../icons/clock'
import { Badge } from './badge'
import { Typography } from './typography'

const Clock = ({ duration }: { duration: string }) => {
  return (
    <div className="flex gap-4">
      <Typography variant="poppins-reg-14">Длительность</Typography>

      <Badge className="bg-blue gap-1 px-2 py-0.5">
        <ClockIcon className="size-3.5" />
        {duration}
      </Badge>
    </div>
  )
}

export { Clock }
