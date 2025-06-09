declare module "@genr8/testing-sandbox" {
  export function createSandbox(): {
    load: (url: string) => Promise<{ container: HTMLElement }>;
    close: () => void;
  };
}
