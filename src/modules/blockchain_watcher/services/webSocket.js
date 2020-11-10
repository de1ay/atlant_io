import { WebSocketWrapper } from '@/core/helpers/webSocketWrapper';

const subscribeMessage = { op: 'unconfirmed_sub' };
const unsubscribeMessage = { op: 'unconfirmed_unsub' };

const webSocketConnection = new WebSocketWrapper(process.env.VUE_APP_BLOCKCHAIN_WS_API_LINK);

webSocketConnection.subscribe = () => webSocketConnection.sendMessage(subscribeMessage);
webSocketConnection.unsubscribe = () => webSocketConnection.sendMessage(unsubscribeMessage);

export default webSocketConnection;
