import "./style.css"
import databaseMock from "./mock.json";
import { useEffect, useState } from "react";

export function Home(){
    const [contact, setContact] = useState(databaseMock.contacts);
    const [chatActive, setChatActive] = useState();

    useEffect(() => {
    }, [])

    function ContactItem({ name, lastMessage, messageCount, date, img}: any){
        return (
            <>
                <div className="container-contact-item" onClick={() => { setChatActive(name) }}>
                    <div className="container-contact-item-profile">
                        <img
                            src={img} 
                            width={90}
                            height={80}
                        />
                    </div>

                    <div className="container-contact-item-message">
                        <div className="container-contact-item-message-title">
                            <h3>{name}</h3>
                            <h4>{date}</h4>
                        </div>

                        <div className="container-contact-item-message-body">
                            <h5>{lastMessage}</h5>
                            
                            <div className="container-contact-item-message-body-count-message">
                                <h6>{messageCount}</h6>
                            </div>
                        </div>
                    </div>
                 </div>
            </>
        )
    }

    function MessageSelectOneChat(){
        return (
            <h1>Selecione um chat!</h1>
        )
    }

    return (
        <div className="container-page">
            <div className="container-list-contact-option">
                <div className="container-my-profile">
                    <h2>SrWalkerB</h2>
                </div>

                <div className="container-contact">
                    {
                        contact.map((item, index) => {
                            return (
                                <ContactItem
                                    key={index}
                                    name={item.name} 
                                    img={item.img}
                                    lastMessage={item.lastMessage} 
                                    messageCount={item.messageCount} 
                                    date={item.date} 
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className="container-chats">
                { chatActive ? <h1>{chatActive }</h1> : <MessageSelectOneChat />}
            </div>
        </div>
    )
}