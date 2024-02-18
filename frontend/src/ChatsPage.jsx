import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "30f9371d-787f-46d4-b271-ef0946611c8c", 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: "100vh" }}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height: "100%" }}/>
        </div>
    );
};

export default ChatsPage;
