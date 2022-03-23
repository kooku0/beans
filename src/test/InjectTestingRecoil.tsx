import { ReactChild, ReactElement } from 'react';

import { MutableSnapshot, RecoilRoot } from 'recoil';

import { LatLng } from '@/models/common';
import latLngState from '@/recoil/post/latLan/atom';

interface Props {
  latLng?: LatLng | null;
  children: ReactChild;
}

function InjectTestingRecoil({
  latLng = null,
  children,
}: Props): ReactElement {
  return (
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void => {
        set(latLngState, latLng);
      }}
    >
      {children}
    </RecoilRoot>
  );
}

export default InjectTestingRecoil;
