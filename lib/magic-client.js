import { Magic } from "magic-sdk";

export const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.MAGIC_PUBLISHABLE_API_KEY)
  );
};

console.log("magic setup", createMagic);
