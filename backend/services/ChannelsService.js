/*
Won't do this in real life
*/

import faker from "faker";
import uuid4 from "uuid/v4";

class ChannelsService {
  constructor() {
    this.channels = [];
  }
  generateFakeChannels() {
    const channels = [];
    Array(5)
      .fill(0)
      .forEach(() => {
        channels.push({
          id: uuid4(),
          users: [],
          topic: faker.commerce.productName(),
        });
      });
    this.channels = channels;
    return channels;
  }
  getChannels() {
    if (!this.channels.length) {
      return this.generateFakeChannels();
    }
    return this.channels;
  }
  getChannel(id) {
    const channal = this.channels.find(channal => channal.id === id);
    return channal;
  }
}

export default ChannelsService;
