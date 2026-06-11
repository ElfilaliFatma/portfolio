"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: AnimateInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
