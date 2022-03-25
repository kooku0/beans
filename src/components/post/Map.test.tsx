import { useEffect } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import useMap from '@/hooks/useMap';
import InjectTestingRecoil from '@/test/InjectTestingRecoil';

import Map from './Map';

jest.mock('@/hooks/useMap');

describe('Map', () => {
  const zoomIn = jest.fn();
  const zoomOut = jest.fn();
  const setMarker = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useMap as jest.Mock).mockImplementation(({ ref, onClick }) => {
      useEffect(() => {
        ref.current?.addEventListener('click', onClick);

        return () => ref.current?.removeEventListener('click', onClick);
      }, [ref]);

      return ({
        zoomIn,
        zoomOut,
        setMarker,
      });
    });
  });

  const renderMap = () => render((
    <InjectTestingRecoil>
      <Map />
    </InjectTestingRecoil>
  ));

  context('지도를 클릭하면', () => {
    it('좌표에 marker가 찍혀야 한다.', () => {
      renderMap();

      fireEvent.click(screen.getByTestId('map'));

      expect(setMarker).toBeCalled();
    });
  });

  context('"+"를 클릭하면', () => {
    it('지도가 줌인 되어야 한다.', () => {
      renderMap();

      fireEvent.click(screen.getByText('+'));

      expect(zoomIn).toBeCalled();
    });
  });

  context('"-"를 클릭하면', () => {
    it('지도가 줌아웃 되어야 한다.', () => {
      renderMap();

      fireEvent.click(screen.getByText('-'));

      expect(zoomOut).toBeCalled();
    });
  });
});
