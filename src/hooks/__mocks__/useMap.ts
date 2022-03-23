const useMap = jest.fn().mockReturnValue({
  ref: jest.fn(),
  zoomIn: jest.fn(),
  zoomOut: jest.fn(),
  setMarker: jest.fn(),
});

export default useMap;
