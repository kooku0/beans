import { useRef } from 'react';

import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import useMap from '@/hooks/useMap';
import { LatLng } from '@/models/common';
import latLanState from '@/recoil/post/latLan/atom';

function Map() {
  const setLatLan = useSetRecoilState(latLanState);
  const center: LatLng = {
    latitude: 33.450701,
    longitude: 126.570667,
  };

  const mapRef = useRef<HTMLDivElement>(null);
  const {
    zoomIn, zoomOut, setMarker,
  } = useMap({
    ref: mapRef,
    center,
    zoomLevel: 3,
    onClick: handleClickMap,
  });

  function handleClickMap(latLng: LatLng) {
    setMarker(latLng);
    setLatLan(latLng);
  }

  return (
    <MapWrapper>
      <MapContainer ref={mapRef} data-testid="map" />
      <ZoomControl>
        <Controller onClick={zoomIn}>
          +
        </Controller>
        <Controller onClick={zoomOut}>
          -
        </Controller>
      </ZoomControl>
    </MapWrapper>
  );
}

export default Map;

const MapWrapper = styled.div`
  width: 320px;
  height: 360px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ZoomControl = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.primary400};
`;

const Controller = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  background: white;

  &:first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.primary400};
    border-radius: 4px 4px 0 0;
  }
`;
