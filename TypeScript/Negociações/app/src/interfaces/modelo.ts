import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

// Interface que incluem outras interfaces
export interface Modelo<T> extends Imprimivel, Comparavel<T> {}