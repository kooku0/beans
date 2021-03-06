import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilValue } from 'recoil';
import * as yup from 'yup';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import useCreateJournal from '@/hooks/api/useCreateJournal';
import { LatLng } from '@/models/common';
import { JournalForm as JournalFormData } from '@/models/journal';
import latLngState from '@/recoil/post/latLan/atom';
import { searchDetailAddrFromCoords } from '@/utils/map';

const validationSchema = yup.object({
  date: yup.date().max(new Date(), '오늘 날짜 이전이어야 합니다.').required('날짜를 입력해주세요.'),
  price: yup.number().required('사용한 비용을 입력해주세요.'),
  location: yup.string().required('위치를 클릭해주세요.'),
  contents: yup.string().trim().required('내용을 입력해주세요.'),
}).required();

interface FormData extends Omit<JournalFormData, 'location'> {
  location: string;
}

function JournalForm() {
  const latLng = useRecoilValue(latLngState);
  const { mutate } = useCreateJournal();

  const {
    register, handleSubmit, setValue, formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    mutate({
      ...data,
      location: latLng as LatLng,
    });
  });

  async function setAddress() {
    if (latLng) {
      const address = await searchDetailAddrFromCoords(latLng);

      setValue('location', address, { shouldValidate: true });
    }
  }

  useEffect(() => {
    setAddress();
  }, [latLng]);

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="date"
        register={register('date')}
        placeholder="날짜"
        error={errors.date?.message}
      />
      <Input
        type="number"
        register={register('price')}
        placeholder="비용"
        error={errors.price?.message}
      />
      <Input
        type="text"
        disabled
        register={register('location')}
        placeholder="위치 (지도에서 클릭해주세요)"
        error={errors.location?.message}
      />
      <Input
        type="text"
        register={register('contents')}
        placeholder="내용"
      />
      <Button
        type="submit"
        disabled={!isValid}
        size="xLarge"
      >
        저장하기
      </Button>
    </Form>
  );
}

export default JournalForm;

const Form = styled.form`
  position: relative;
  width: 496px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary30};
  box-sizing: border-box;
  border-radius: 8px;
  margin: 40px 0 100px 0;
  padding: 14px 59px;
  text-align: center;

  & > div {
    margin-bottom: 12px;
  }
`;
