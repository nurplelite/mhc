import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const primaryPalette1 = palette('#266198')
const secondaryPalette1 = palette('#d64fb5')
const tertiaryPalette1 = palette('#fe9b59')
const surfacePalette1 = palette('#5f634f')

const primaryPalette = palette('#FFA15A')
const secondaryPalette = palette('#5B616A')
const tertiaryPalette = palette('#415F8C')
const surfacePalette = palette('#FECCA9')


export const mhcPreset = definePreset( Aura,
  {
    primtive: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      tertiary: tertiaryPalette,
      surface: surfacePalette,
    },
    semantic: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      tertiary: tertiaryPalette,
      surface: surfacePalette,
    },
    component: {
      tokens: {
        primaryColor: '{primary.400}',
        primaryColorText: '#ffffff',
        background: '{surface.900}',
        surfaceColor: '{surface.950}',
        textColor: '#ffffff',
        contentColor: '{surface.0}',
      },
    }
  }
)

