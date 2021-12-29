export type TerminalInfoType = {
  type: "input-output" | "input" | "output";
  key: string | number;
  inputValue?: string;
  outputValue?: string;
  delay?: number;
};

export type DemoInfoType = {
  title: string;
  textBtn: string;
  describe: string;
  link: string;
  terminalInfo: Array<TerminalInfoType>;
};
