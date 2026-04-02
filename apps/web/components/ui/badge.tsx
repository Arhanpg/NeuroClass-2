import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors", {
  variants: { variant: { default: "bg-brand-500 text-white", secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100", success: "bg-green-100 text-green-800", warning: "bg-yellow-100 text-yellow-800", destructive: "bg-red-100 text-red-800" } },
  defaultVariants: { variant: "default" },
});

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
