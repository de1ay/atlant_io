const wsEvents = {
  open: 'open',
  message: 'message',
  close: 'close',
  error: 'error',
};

export class WebSocketWrapper {
  wsEvents = wsEvents;

  webSocketInstance = null;

  url = '';

  reconnect = {
    timeout: null,
    try: 0,
  }

  options = {
    reconnectOnError: true,
    reconnectTimeout: 5000, // ms
    reconnectMaxAttempts: 10,
  }

  get state() {
    return this.webSocketInstance.readyState;
  }

  constructor(url, options) {
    this.url = url;
    if (options) this.options = { ...this.options, ...options };
  }

  connect() {
    this.webSocketInstance = new WebSocket(this.url);
    this.webSocketInstance.onopen = this.onOpen.bind(this);
    this.webSocketInstance.onerror = this.onError.bind(this);
  }

  addEventListener(eventType, callback) {
    this.webSocketInstance.addEventListener(eventType, callback);
  }

  sendMessage(data) {
    if (!this.webSocketInstance || this.state !== WebSocket.OPEN) return;
    switch (typeof data) {
      case String.name.toLocaleLowerCase():
        this.webSocketInstance.send(data);
        break;
      case Object.name.toLocaleLowerCase():
        this.webSocketInstance.send(JSON.stringify(data));
        break;
      default:
        break;
    }
  }

  close() {
    if (this.webSocketInstance && this.state !== WebSocket.CLOSED) {
      this.webSocketInstance.close();
    }
  }

  onOpen() {
    if (this.reconnect.try > 0) {
      this.reconnect.try = 0;
    }
  }

  onError() {
    if (this.options.reconnectOnError && this.reconnect.try < this.options.reconnectMaxAttempts) {
      this.reconnect.timeout = setTimeout(this.connect.bind(this), this.options.reconnectTimeout);
      this.reconnect.try += 1;
    }
  }
}

export default WebSocketWrapper;
