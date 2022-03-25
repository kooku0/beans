import { RefObject } from 'react';

import { act, renderHook } from '@testing-library/react-hooks';

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

  const onClick = jest.fn();
  const setLevel = jest.fn();
  const getLevel = jest.fn();
  const LatLng = jest.fn();
  const setMap = jest.fn();
  const setPosition = jest.fn();
  const addListener = jest.fn();
  const removeListener = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    const kakao = {
      maps: {
        Map: jest.fn(),
        LatLng,
        Size: jest.fn(),
        Marker: jest.fn(),
        MarkerImage: jest.fn(),
        event: {
          addListener,
          removeListener,
        },
      },
    };
    (kakao.maps.Map as jest.Mock).mockReturnValue({
      setLevel,
      getLevel: getLevel.mockReturnValue(mockMap.zoomLevel),
    });
    (kakao.maps.Marker as jest.Mock).mockReturnValue({
      setMap,
      setPosition,
    });

    global.kakao = (kakao as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const useMapHook = (ref: RefObject<HTMLDivElement> = mockMap.ref) => renderHook(
    () => useMap({ ...mockMap, ref, onClick }),
  );

  const clickedMap = (event: kakao.maps.event.MouseEvent) => {
    const { calls } = (window.kakao.maps.event.addListener as jest.Mock).mock;
    calls[0][2](event);
  };

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

  describe('setMarker', () => {
    context('찍혀있는 Marker가 없다면', () => {
      it('새 marker를 map에 찍어야 한다.', () => {
        const { result } = useMapHook();

        act(() => result.current.setMarker(mockMap.center));

        expect(setMap).toBeCalledTimes(1);
        expect(setPosition).not.toBeCalled();
      });
    });

    context('찍혀있는 Marker가 있다면', () => {
      it('기존 marker의 위치를 이동시켜야 한다.', async () => {
        const { result, waitForNextUpdate } = useMapHook();

        await act(async () => {
          result.current.setMarker(mockMap.center);

          await waitForNextUpdate();

          result.current.setMarker(mockMap.center);
        });

        expect(setMap).toBeCalledTimes(1);
        expect(setPosition).toBeCalled();
      });
    });
  });

  describe('click event callback 등록', () => {
    context('onCallback이 있고, map을 제대로 클릭했다면', () => {
      const latLng = {
        latitude: 111,
        longitude: 222,
      };
      const event = {
        latLng: {
          getLat: () => latLng.latitude,
          getLng: () => latLng.longitude,
        },
      } as kakao.maps.event.MouseEvent;

      it('지도를 클릭할때 onClick에 좌표값이 전달되어야 한다.', () => {
        useMapHook();

        clickedMap(event);

        expect(onClick).toBeCalledWith(latLng);
      });
    });

    context('onClick이 없거나, map을 제대로 클릭하지 않았다면', () => {
      it('클릭 이벤트 리스터가 등록되지 않아야 한다.', () => {
        useMapHook();

        clickedMap({ latLng: undefined });

        expect(onClick).not.toBeCalled();
      });
    });
  });
});
