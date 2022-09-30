import { render } from '@testing-library/react';

import SimpleComponentReact16 from './simple-component-react-16';

describe('SimpleComponentReact16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleComponentReact16 />);
    expect(baseElement).toBeTruthy();
  });
});
