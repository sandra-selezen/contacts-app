import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const dark = definePartsStyle({
  content: defineStyle({
    bg: 'light.700',
  }),
});

export const popoverTheme = defineMultiStyleConfig({
  variants: { dark },
});
