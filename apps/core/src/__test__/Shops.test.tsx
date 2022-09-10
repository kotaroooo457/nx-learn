import { render, screen, waitFor } from '@testing-library/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Shops } from '../pages/Shops';

describe('<Shops />', () => {
  test('正常にレンダリングできる', async () => {
    const { container } = render(
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback="...loading">
            <Shops />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
    );

    await waitFor(() => expect(screen.getByText('ドラッグストア')).toBeTruthy());

    expect(container).toMatchSnapshot();
  });
});
