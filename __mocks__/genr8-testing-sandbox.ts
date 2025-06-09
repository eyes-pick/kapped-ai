export function createSandbox() {
  return {
    load: async (_url: string) => {
      void _url;
      return { container: document.createElement('div') };
    },
    close: () => {},
  };
}
