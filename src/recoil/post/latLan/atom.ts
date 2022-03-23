import { atom } from 'recoil';

import { LatLng } from '@/models/common';

const latLngState = atom<LatLng | null>({
  key: 'post/latLngState',
  default: null,
});

export default latLngState;
