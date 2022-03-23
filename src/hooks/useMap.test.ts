import { RefObject } from 'react';

import { renderHook } from '@testing-library/react-hooks';

import useMap from './useMap';

describe('useMap', () => {
  const mockMap = {
    ref: { current: document.createElement('div') },
    center: {
      latitude: 123.12,
      longitude: 123.12,
    },
    zoomLevel: 3,
  };
  const setLevel = jest.fn();
  const getLevel = jest.fn();
  const LatLng = jest.fn();
  const setMap = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    const kakao = {
      maps: {
        Map: jest.fn(),
        LatLng,
        Size: jest.fn(),
        Marker: jest.fn(),
        MarkerImage: jest.fn(),
      },
    };
    (kakao.maps.Map as jest.Mock).mockReturnValue({
      setLevel,
      getLevel: getLevel.mockReturnValue(mockMap.zoomLevel),
    });
    (kakao.maps.Marker as jest.Mock).mockReturnValue({
      setMap,
    });

    global.kakao = (kakao as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const useMapHook = (ref: RefObject<HTMLDivElement> = mockMap.ref) => renderHook(
    () => useMap({ ...mockMap, ref }),
  );

  context('ref.current가 null 이라면', () => {
    it('지도가 생성되지 않아야 한다.', () => {
      useMapHook({ current: null });

      expect(kakao.maps.Map).not.toBeCalled();
    });

    it('zoomIn을 호출하면 zoomLevel이 변하지 않아야 한다.', () => {
      const { result: { current } } = useMapHook({ current: null });
      const { zoomIn } = current;

      zoomIn();

      expect(setLevel).not.toBeCalled();
    });

    it('zoomOut을 호출하면 zoomLevel이 변하지 않아야 한다.', () => {
      const { result: { current } } = useMapHook({ current: null });
      const { zoomOut } = current;

      zoomOut();

      expect(setLevel).not.toBeCalled();
    });
  });

  context('ref.current가 HTMLDivElement 라면', () => {
    it('map이 생성되어야 한다.', () => {
      useMapHook();

      expect(kakao.maps.Map).toBeCalled();
    });

    it('zoomIn을 호출하면 현재 zoomLevel을 하나 줄여야 한다.', () => {
      const { result: { current } } = useMapHook();
      const { zoomIn } = current;

      zoomIn();

      expect(setLevel).toBeCalledWith(mockMap.zoomLevel - 1);
    });

    it('zoomOut을 호출하면 현재 zoomLevel을 하나 올려야 한다.', () => {
      const { result: { current } } = useMapHook();
      const { zoomOut } = current;

      zoomOut();

      expect(setLevel).toBeCalledWith(mockMap.zoomLevel + 1);
    });
  });

  it('setMarker를 호출하면 marker를 map에 찍어야 한다.', () => {
    const { result: { current } } = useMapHook();
    const { setMarker } = current;

    setMarker(mockMap.center);

    expect(window.kakao.maps.Marker).toBeCalled();
  });
});
