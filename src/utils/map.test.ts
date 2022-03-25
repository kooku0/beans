import { searchDetailAddrFromCoords } from './map';

describe('searchDetailAddrFromCoords', () => {
  const address = '제주특별자치도 제주시 양평동 2181';
  const roadAddress = '제주특별자치도 제주시 첨단동길 92';
  const buildingName = '영주고등학교';

  const latLng = { latitude: 123, longitude: 123 };

  beforeEach(() => {
    jest.clearAllMocks();

    const kakao = {
      maps: {
        services: {
          Geocoder: jest.fn(() => ({
            coord2Address: jest.fn((longitude, latitude, callback) => callback([{
              address: given.address,
              road_address: given.roadAddress,
            }], given.status)),
          })),
        },
      },
    };

    global.kakao = (kakao as any);
  });

  describe('위도 경도 좌표를 넘겨준다.', () => {
    context('올바른 좌표라면', () => {
      given('status', () => 'OK');

      context('도로명 주소가 있다면', () => {
        given('roadAddress', () => ({
          address_name: roadAddress,
          building_name: buildingName,
        }));

        it('도로명 주소와 빌딩명을 반환해야 한다.', async () => {
          const result = await searchDetailAddrFromCoords(latLng);

          expect(result).toBe(`${roadAddress} (${buildingName})`);
        });
      });

      context('도로명 주소가 없다면', () => {
        given('roadAddress', () => null);
        given('address', () => ({
          address_name: address,
        }));

        it('지번 주소를 반환해야 한다.', async () => {
          const result = await searchDetailAddrFromCoords(latLng);

          expect(result).toBe(address);
        });
      });
    });
  });

  context('올바른 좌표가 아니라면', () => {
    given('status', () => 'ERROR');

    it('에러를 반환해야한다.', async () => {
      await expect(searchDetailAddrFromCoords(latLng)).rejects.toThrowError('잘못된 좌표입니다.');
    });
  });
});
