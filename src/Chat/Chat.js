import React from 'react'
import { Avatar, IconButton, Button} from '@material-ui/core';
import {AttachFile,MoreVert,SearchOutlined,InsertEmoticon, SettingsInputAntenna,Mic} from '@material-ui/icons';
import "./Chat.css" 

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar/>

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Mohak</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">Mohak</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Mohak</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <form>
                    <input 
                        onChange={(e) => SettingsInputAntenna(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                        <Button 
                            type="submit">
                            Send a message
                        </Button>
                </form>
                <IconButton>
                    <Mic/>
                </IconButton>
            </div>
        </div>
    )
}
export default Chat
