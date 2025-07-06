export interface LogMessage {
  level: 'info' | 'error' | 'warn' | 'debug';
  message: string;
}
