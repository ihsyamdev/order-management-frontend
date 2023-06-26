import Link from "next/link"

type NavigationLinkProps = {
  href: string
  children: React.ReactNode
}

export const NavigationLink = ({ href, children }: NavigationLinkProps) => {
  return (
    <Link href={ href }>
      { children }
    </Link>
  )
}
