import "styled-components";

import { Theme } from "../global/Theme";

export type ITheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
