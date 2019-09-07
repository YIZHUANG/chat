import uuid4 from "uuid/v4";

class MessageService {
  constructor() {
    this.messages = {};
  }
  addMessage(channelId, message) {
    if (!this.messages[channelId]) {
      this.messages[channelId] = [];
    }
    this.messages[channelId].push({
      id: uuid4(),
      ...message,
    });
  }
  getAllMessages(channelId) {
    return this.messages[channelId];
  }
}

export default MessageService;
