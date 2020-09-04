import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

it('should render the landing page by default', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello, world!')).toBeInTheDocument();
});
