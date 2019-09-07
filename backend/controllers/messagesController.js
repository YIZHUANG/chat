import { messageService } from "../services";

const getAllMessages = (req, res) => {
  const messages = messageService.getAllMessages(req.params.channelId);
  res.json(messages);
};
const sendMessage = (req, res) => {
  messageService.addMessage(req.params.channelId, req.body.message);
  res.send(200);
};
export default { getAllMessages, sendMessage };
