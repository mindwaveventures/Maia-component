class VoiceCommandManager {
    private commands: Record<string, () => void | Promise<void>> = {};
    private lastExecutedCommand: string | null = null;
    private receivedCommands: string | null = null;
  
    constructor() {
      this.setReceivedCommand = this.setReceivedCommand.bind(this);
      this.getReceivedCommand = this.getReceivedCommand.bind(this);
    }
  
    addCommand(command: string, action: () => void | Promise<void>) {
      this.commands[command] = action;
    }
  
    setReceivedCommand(command: string) {
      this.receivedCommands = command;
      return this.receivedCommands;
    }
  
    getReceivedCommand() {
      return this.receivedCommands;
    }
  
    async executeCommand(command: string) {
      this.lastExecutedCommand = command;
      if (this.commands[command]) {
        await this.commands[command]();
      } else {
        console.error(`Command "${command}" not found.`);
      }
  
      return this.lastExecutedCommand;
    }
  
    removeCommand(command: string) {
      delete this.commands[command];
    }
  
    getLastExecutedCommand() {
      return this.lastExecutedCommand;
    }
  }
  
  export const voiceCommandManager = new VoiceCommandManager();
  