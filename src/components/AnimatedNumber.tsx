import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: string; // e.g. "20000+", "15,000m"
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix from string
  const numericString = value.replace(/[^0-9.]/g, "");
  const numberValue = parseFloat(numericString);
  const suffix = value.replace(/[0-9.,]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2000
  });

  useEffect(() => {
    if (isInView && !isNaN(numberValue)) {
      motionValue.set(numberValue);
    } else if (isInView && isNaN(numberValue)) {
      if (ref.current) ref.current.textContent = value;
    }
  }, [motionValue, isInView, numberValue, value]);

  useEffect(() => {
    if (isNaN(numberValue)) return;
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix, numberValue]);

  return <span ref={ref}>{isNaN(numberValue) ? value : `0${suffix}`}</span>;
}
