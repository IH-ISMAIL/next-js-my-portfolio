import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"





export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function sectionClassName (usePathname) {
  const pathname = usePathname(); 
  const pathSegments = pathname.split('/').filter(Boolean)[0]; 

  return(pathSegments)

}
