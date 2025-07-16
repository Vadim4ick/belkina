'use client'

import { Typography } from '@/shared/ui/typography'
import { cn } from '@/shared/lib/utils'
import { TariffFragmentFragment } from '@/shared/graphql/__generated__'
import { TariffButton } from './tariff-button'

const TariffCard = ({ item, className }: { item: TariffFragmentFragment; className?: string }) => {
  return (
    <div
      className={cn(
        'border-light-grey flex flex-col gap-6 rounded-[16px] border bg-white px-4 py-[34px]',
        className,
      )}
    >
      <Typography tag="p" variant="poppins-md-16">
        {item.title}
      </Typography>

      <Typography
        tag="div"
        className="bg-light-grey rounded-[6px] px-[10px] py-3 text-[#6B7280]"
        variant="poppins-reg-14"
      >
        {item.subtitle}
      </Typography>

      <Typography tag="p" variant="poppins-reg-14">
        Включает в себя
      </Typography>

      <div className="flex h-full max-h-[356px] flex-col gap-2 overflow-y-auto">
        {item.benefits.map((item) => (
          <div
            key={item.id}
            className="bg-light-grey flex items-center gap-3 rounded-[6px] px-[10px] py-3"
          >
            🔥
            <Typography tag="span" className="text-[#6B7280]" variant="poppins-reg-14">
              {item.value}
            </Typography>
          </div>
        ))}
      </div>

      <Typography className="py-3 text-[#6B7280]" tag="p" variant="poppins-reg-14">
        {item.description}
      </Typography>

      <div className="flex w-full flex-col gap-6">
        <Typography className="text-dark-grey uppercase" tag="p" variant="poppins-md-16">
          От {item.price} рублей
        </Typography>

        <TariffButton />
      </div>
    </div>
  )
}

export { TariffCard }
