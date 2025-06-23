import { cn } from '@/shared/lib/utils'
import { Button, ButtonProps } from '@/shared/ui/button'
import { SheetClose } from '@/shared/ui/sheet'
import { FC, ReactNode, SVGProps } from 'react'

interface SidebarButtonProps extends ButtonProps {
  icon?: FC<SVGProps<SVGSVGElement>> | null
  className?: string
  children: ReactNode
}

const MobileNavButton = ({ icon: Icon, className, children, ...props }: SidebarButtonProps) => {
  return (
    <Button variant="ghostWhite" className={cn('w-full justify-start gap-2', className)} {...props}>
      {Icon && <Icon />}
      <span>{children}</span>
    </Button>
  )
}

export { MobileNavButton }

const SidebarButtonSheet = (props: SidebarButtonProps) => {
  return (
    <SheetClose asChild>
      <MobileNavButton {...props} />
    </SheetClose>
  )
}

export { SidebarButtonSheet }
