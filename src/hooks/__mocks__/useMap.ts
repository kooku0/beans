const useMap = jest.fn(({ ref, onClick }) => {
  ref.current?.addEventListener('click', onClick);

  return ({
    zoomIn: jest.fn(),
    zoomOut: jest.fn(),
    setMarker: jest.fn(),
  });
});

export default useMap;
