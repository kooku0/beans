import { LatLng } from '@/models/common';

// eslint-disable-next-line import/prefer-default-export
export function searchDetailAddrFromCoords({ latitude, longitude }: LatLng): Promise<string> {
  const geocoder = new kakao.maps.services.Geocoder();

  return new Promise(
    (resolve, reject) => geocoder.coord2Address(
      longitude,
      latitude,
      (result, status) => {
        if (status === 'OK') {
          const { address, road_address: roadAddress } = result[0];
          if (roadAddress && roadAddress.building_name) {
            resolve(`${roadAddress.address_name} (${roadAddress.building_name})`);
          }

          resolve(address.address_name);
        }

        reject(new Error('잘못된 좌표입니다.'));
      },
    ),
  );
}
