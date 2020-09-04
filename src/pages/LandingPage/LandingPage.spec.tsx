import React from 'react';
import { render } from '@testing-library/react';

import LandingPage from './LandingPage';

it('should render a heading', () => {
  const { getByText } = render(<LandingPage />);

  expect(getByText('Hello, world!')).toBeInTheDocument();
});
