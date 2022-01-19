export type TerminalCommandType = {
  type: "input-output" | "input" | "output";
  key: string | number;
  inputValue?: string;
  outputValue?: string;
  delay?: number;
};

export type TerminalInfoType = {
  title: string;
  isBanner: boolean;
  textBtn: string;
  link: string;
  terminalInfo: Array<TerminalCommandType>;
};

export * from "./termData";
