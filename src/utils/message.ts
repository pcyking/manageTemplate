import { ElMessage, MessageOptions } from 'element-plus';

let messageInstance: any = null;
const arr: string[] = ['success', 'error', 'info', 'warning', ''];

arr.forEach((type: any) => {
  DoneMessage[type] = (options: MessageOptions) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return DoneMessage(options);
  };
});

export default function DoneMessage(options: MessageOptions) {
  if (messageInstance) {
    messageInstance.close();
  }
  messageInstance = ElMessage(options);
  return messageInstance;
}
