import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const dark = definePartsStyle({
  dialog: {
    bg: 'dark.900',
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { dark },
});