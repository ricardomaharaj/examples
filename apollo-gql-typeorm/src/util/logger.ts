export class Logger {
  static info(msg: string) {
    console.log(`[${new Date().toLocaleTimeString()}] [INFO] ${msg}`)
  }
  static error(msg: string) {
    console.error(`[${new Date().toLocaleTimeString()}] [ERROR] ${msg}`)
  }
}
