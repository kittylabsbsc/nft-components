import { create } from '@storybook/theming';

import header from './brand.png';

export default create({
  base: 'dark',
  brandTitle: 'Tuli Labs',
  brandUrl: 'https://tuli.ink/',
  brandImage: header,
});
