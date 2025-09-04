"use client";
import React, { useEffect, useState } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children?: React.ReactNode;
  className?: string;
  variants?: Variants;
  threshold?: number;
  delay?: number;
  duration?: number;
};

const useDisableAnimations = () => {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => { 
    if (typeof window !== "undefined") {
      setDisableAnimations(window.innerWidth < 345);
    }
  }, []);

  return disableAnimations;
};

const Reveal = ({ children, variants, threshold, delay, duration, className }: Props) => {
  const disableAnimations = useDisableAnimations();
  const controls = useAnimation();

  const final_variants = variants || {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const { ref, inView } = useInView({ threshold: threshold || 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={!disableAnimations ? final_variants : undefined}
      initial="hidden"
      animate={controls}
      transition={{ delay: delay || 0, duration: duration || 1.5, ease: "easeInOut", type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealRight = ({ children, variants, threshold, delay, duration, className }: Props) => {
  const disableAnimations = useDisableAnimations();
  const controls = useAnimation();

  const final_variants = variants || {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const { ref, inView } = useInView({ threshold: threshold || 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={!disableAnimations ? final_variants : undefined}
      initial="hidden"
      animate={controls}
      transition={{ delay: delay || 0, duration: duration || 1.5, ease: "easeInOut", type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealUp = ({ children, variants, threshold, delay, duration, className }: Props) => {
  const disableAnimations = useDisableAnimations();
  const controls = useAnimation();

  const final_variants = variants || {
    hidden: { opacity: 0, x: 0, y: 50 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const { ref, inView } = useInView({ threshold: threshold || 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={!disableAnimations ? final_variants : undefined}
      initial="hidden"
      animate={controls}
      transition={{ delay: delay || 0, duration: duration || 1.5, ease: "easeInOut", type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealDown = ({ children, variants, threshold, delay, duration, className }: Props) => {
  const disableAnimations = useDisableAnimations();
  const controls = useAnimation();

  const final_variants = variants || {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const { ref, inView } = useInView({ threshold: threshold || 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={!disableAnimations ? final_variants : undefined}
      initial="hidden"
      animate={controls}
      transition={{ delay: delay || 0, duration: duration || 1.5, ease: "easeInOut", type: "spring" }}
      className={className}
   
    >
      {children}
    </motion.div>
  );
};

export const RevealScaleUp = ({ children, variants, threshold, delay, duration, className }: Props) => {
  const disableAnimations = useDisableAnimations();
  const controls = useAnimation();

  const final_variants = variants || {
    hidden: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
  };

  const { ref, inView } = useInView({ threshold: threshold || 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={!disableAnimations ? final_variants : undefined}
      initial="hidden"
      animate={controls}
      transition={{ delay: delay || 0, duration: duration || 1.5, ease: "easeInOut", type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


export default Reveal;
