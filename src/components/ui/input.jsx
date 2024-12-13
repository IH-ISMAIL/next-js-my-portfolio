import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[40px]  border-white/10 focus:border-accent focus:outline-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none rounded-[7px]",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
