export function createSandbox() {
  return {
    load: async () => ({ container: document.createElement('div') }),
    close: () => {},
  };
}
