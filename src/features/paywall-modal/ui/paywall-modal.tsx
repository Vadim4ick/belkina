'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog'
import { TariffList } from '@/features/tariff-list'
import { useGetAllTariffs } from '@/shared/services/tarrifs.service'

export const PaywallModal = ({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  const { data, isLoading } = useGetAllTariffs()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-fit max-h-[650px] w-full max-w-[850px]">
        <div className="max-mobile:px-4 flex flex-col gap-6 overflow-auto rounded-[6px] bg-white p-6">
          <DialogHeader className="flex flex-col gap-6">
            <DialogTitle>Доступ к следующему уроку</DialogTitle>
            <DialogDescription>
              Доступ к следующим урокам возможен только по одному из оплаченных тарифов.
              Ознакомьтесь с вариантами ниже и выберите подходящий, чтобы продолжить обучение.
            </DialogDescription>
          </DialogHeader>

          <TariffList tarrifs={data?.Tariffs.docs} isLoading={isLoading} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
