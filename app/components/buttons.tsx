import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & {
      href?: undefined
    })

export function Button({ className, ...props }: ButtonProps) {
  className = clsx(
    'bg-highlight-primary py-4 flex justify-center rounded-full px-12 text-background font-bold hover:bg-highlight-primary/70 duration-200',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}