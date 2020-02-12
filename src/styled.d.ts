
import 'styled-components';
import { Theme } from './config/Theme';

declare module 'styled-components' {

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {
   }
}
