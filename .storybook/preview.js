import GlobalStyles from "../src/styles/Global";


export const parameters = {
  controls: {
    presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
  },
};


export const decorators = [
  (Story) => (
    <>
    <GlobalStyles />
    {Story()}
   </>
  ),
];
