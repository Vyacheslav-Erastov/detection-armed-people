import useWebSocket from "react-use-websocket";

const WebsocketProvider = ({ onChange, url }: { onChange: any, url: string }) => {
    const onOpen = (e: any) => {
        console.log(e);
    };
    const onClose = (e: any) => {
        console.error(e);
    };
    const onMessage = (e: any) => {
        // const result = extract_data(e); if (!result) return;
        // const { event, data } = result;
        // onChange(event, data);
        console.log(e)
    };
    useWebSocket(url, {
        onOpen,
        onClose, onMessage,
        shouldReconnect: (closeEvent) => true, reconnectAttempts: 5,
        onReconnectStop: () => console.error("Ошибка подключения вебсокета к серверу")
    });
    return null;
};
export default WebsocketProvider;