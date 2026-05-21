import "styled-components";
// 1. Importiere dein echtes Theme-Objekt (Pfade eventuell anpassen)
import { petrolTheme } from "@/styles/theme";

// 2. Erstelle einen Typ aus dem echten Objekt
type CustomTheme = typeof petrolTheme;

// 3. Erweitere das DefaultTheme von styled-components
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
