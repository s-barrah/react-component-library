import * as React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';

import RichText from './RichText';

const htmlContent = "<p>Here's some copy</p><span>More copy</span>";

it('Atoms/RichText component - It sanitises markup and renders', () => {
  const component = renderWithTheme(
    <RichText align="right" markup={htmlContent} />
  ).toJSON();
  expect(component).toMatchInlineSnapshot(`
    .c0 {
      text-align: right;
    }

    <div
      className="c0"
      dangerouslySetInnerHTML={
        Object {
          "__html": "<p>Here's some copy</p><span>More copy</span>",
        }
      }
    />
  `);
});

it('Atoms/RichText component - renders HTML content properly', () => {
  const component = renderWithTheme(
    <RichText align="right" markup={htmlContent} />
  ).toJSON();
  expect(component?.props.dangerouslySetInnerHTML?.__html).toBe(htmlContent);
});
