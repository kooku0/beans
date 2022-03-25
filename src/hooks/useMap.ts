import {
  RefObject, useEffect, useState,
} from 'react';

import { LatLng } from '@/models/common';

interface Params {
  ref: RefObject<HTMLDivElement>
  center: LatLng;
  zoomLevel: number;
  onClick?: (latLng: LatLng) => void;
}

interface Map {
  zoomIn: () => void;
  zoomOut: () => void;
  setMarker: (position: LatLng) => void;
}

interface State {
  map: kakao.maps.Map | null;
  marker: kakao.maps.Marker | null;
}

function useMap({
  ref, center, zoomLevel, onClick,
}: Params): Map {
  const [state, setState] = useState<State>({
    map: null,
    marker: null,
  });

  const { map, marker } = state;

  useEffect(() => {
    const mapElement = ref.current;

    if (mapElement) {
      const mapOption = {
        center: new kakao.maps.LatLng(center.latitude, center.longitude),
        level: zoomLevel,
      };
      const kakaoMap = new kakao.maps.Map(mapElement, mapOption);
      setState({
        ...state,
        map: kakaoMap,
      });
    }
  }, []);

  function clickEventCallback(event: kakao.maps.event.MouseEvent) {
    if (onClick && event.latLng) {
      onClick({
        latitude: event.latLng.getLat(),
        longitude: event.latLng.getLng(),
      });
    }
  }

  useEffect(() => {
    if (map && onClick) {
      kakao.maps.event.addListener(map, 'click', clickEventCallback);
    }

    return () => {
      if (map && onClick) {
        kakao.maps.event.removeListener(map, 'click', clickEventCallback);
      }
    };
  }, [map, onClick]);

  const zoomIn = () => {
    if (map) {
      map.setLevel(map.getLevel() - 1);
    }
  };
  const zoomOut = () => {
    if (map) {
      map.setLevel(map.getLevel() + 1);
    }
  };

  const setMarker = (position: LatLng) => {
    const { latitude, longitude } = position;

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    if (marker) {
      marker.setPosition(markerPosition);

      return;
    }

    const newMarker = new kakao.maps.Marker({
      position: markerPosition,
    });

    newMarker.setMap(map);

    setState({
      ...state,
      marker: newMarker,
    });
  };

  return {
    zoomIn,
    zoomOut,
    setMarker,
  };
}

export default useMap;
