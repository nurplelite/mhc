import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const primaryPalette = palette('#266198')
const secondaryPalette = palette('#d64fb5')
const tertiaryPalette = palette('#fe9b59')
const surfacePalette = palette('#5f634f')

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

