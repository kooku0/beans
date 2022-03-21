import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface FormData {
  date: string;
  price: string;
  location: string;
  contents: string;
}

const validationSchema = yup.object({
  date: yup.string().required('날짜를 입력해주세요.'),
  price: yup.number().required('사용한 비용을 입력해주세요.'),
  location: yup.string().trim().required('위치를 입력해주세요.'),
  contents: yup.string().trim().required('내용을 입력해주세요.'),
}).required();

function FormContainer() {
  const { register, handleSubmit, formState: { isValid } } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="date"
        register={register('date')}
        placeholder="날짜"
      />
      <Input
        type="text"
        register={register('price')}
        placeholder="비용"
      />
      <Input
        type="text"
        register={register('location')}
        placeholder="위치"
      />
      <Input
        type="text"
        register={register('contents')}
        placeholder="내용"
      />
      <Button type="submit" disabled={!isValid}>저장하기</Button>
    </Form>
  );
}

export default FormContainer;

const Form = styled.form`
  position: relative;
  width: 496px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary30};
  box-sizing: border-box;
  border-radius: 8px;
  margin: 80px 0 100px 0;
  padding: 0 59px;
  text-align: center;

  input {
    margin-bottom: 12px;
  }
`;
