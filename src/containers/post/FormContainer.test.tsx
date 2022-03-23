import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { act } from '@testing-library/react-hooks';

import useCreateJournal from '@/hooks/api/useCreateJournal';
import ReactQueryWrapper from '@/test/ReactQueryWrapper';

import FormContainer from './FormContainer';

jest.mock('@/hooks/api/useCreateJournal');

describe('FormContainer', () => {
  const handleCreateJournal = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useCreateJournal as jest.Mock).mockImplementation(() => ({
      isSuccess: given.isSuccess,
      mutate: handleCreateJournal,
      error: given.error,
    }));
  });

  const renderFormContainer = () => render((
    <ReactQueryWrapper>
      <FormContainer />
    </ReactQueryWrapper>
  ));

  context('form을 제대로 입력하면', () => {
    context('저장하기 버튼을 누르면', () => {
      it('입력한 값들이 콘솔에 찍혀야 한다.', async () => {
        renderFormContainer();

        await act(async () => {
          await fireEvent.input(screen.getByPlaceholderText('날짜'), {
            target: { value: '2012-04-12' },
          });
          await fireEvent.input(screen.getByPlaceholderText('비용'), {
            target: { value: 123 },
          });
          await fireEvent.input(screen.getByPlaceholderText('위치'), {
            target: { value: 'location' },
          });
          await fireEvent.input(screen.getByPlaceholderText('내용'), {
            target: { value: 'contents' },
          });

          fireEvent.submit(screen.getByText('저장하기'));
        });

        expect(handleCreateJournal).toBeCalledWith({
          date: new Date('2012-04-12'),
          price: 123,
          location: 'location',
          contents: 'contents',
        });
      });
    });
  });

  context('form을 잘 못 입력하면', () => {
    it('form이 제출되지 않는다.', async () => {
      renderFormContainer();

      await act(async () => {
        await fireEvent.input(screen.getByPlaceholderText('날짜'), {
          target: { value: '2012-04-12' },
        });
        await fireEvent.input(screen.getByPlaceholderText('비용'), {
          target: { value: '비용' },
        });
        await fireEvent.input(screen.getByPlaceholderText('위치'), {
          target: { value: 'location' },
        });
        await fireEvent.input(screen.getByPlaceholderText('내용'), {
          target: { value: 'contents' },
        });

        fireEvent.submit(screen.getByText('저장하기'));
      });

      expect(handleCreateJournal).not.toBeCalled();
    });
  });
});
