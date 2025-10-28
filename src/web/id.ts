import { effects } from "ferp";
import { randomBytes } from "node:crypto";

/**
 * Generate a random string with randomBytes of node:crypto.  
 * 10 bytes generated produce 20 chars with hexadecimal format
 * @returns Random string of 20 chars
 */
export const id = () => randomBytes(10).toString("hex");

export const GenerateIdEffect = (action) =>
  effects.thunk(() => {
    return effects.act(action(id()), action.name || "GenerateIdEffect.Action");
  }, "GenerateIdEffect");
randomBytes(16).toString("base64url").replace(/=/g, "");
