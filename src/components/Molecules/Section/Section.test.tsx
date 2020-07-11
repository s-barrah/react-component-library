import * as React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';

import Section from './Section';

const htmlContent =
  "<p>Here's the section description copy</p><span>More copy</span>";

it('Atoms/RichText component - It sanitises markup and renders', () => {
  const component = renderWithTheme(
    <Section
      title="Test Section"
      titleTag="h1"
      uppercase
      content={htmlContent}
    />
  ).toJSON();
  expect(component).toMatchInlineSnapshot(`
    Array [
      .c0 {
      font-size: 1.44rem;
      text-transform: uppercase;
      font-weight: font-weight:normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    <h1
        className="c0"
        color="inherit"
        family="Montserrat"
        size="l"
        weight="normal"
      >
        Test Section
      </h1>,
      .c0 {
      text-align: left;
    }

    <div
        className="c0"
        dangerouslySetInnerHTML={
          Object {
            "__html": "<p>Here's the section description copy</p><span>More copy</span>",
          }
        }
      />,
    ]
  `);
});
