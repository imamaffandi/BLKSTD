export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
      ease: "linear",
    },
  },
};
export const itemUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const itemDown = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const itemLeft = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const itemRight = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const right = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const left = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear" },
  },
};
export const up = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    transition: { ease: "linear" },
    y: 0,
    opacity: 1,
  },
};
export const down = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    transition: { ease: "linear" },
    y: 0,
    opacity: 1,
  },
};
