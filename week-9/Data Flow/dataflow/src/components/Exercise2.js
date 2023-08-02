import React, {useState} from "react"
import List from "./List"
import Conversation from "./Conversation"

function Exercise2 () {

    const [data, setData] = useState(
        {
            displayConversation: null,
            conversations: [
                {
                    with: "Laura", convo: [
                        { text: "Hi", sender: "self" },
                        { text: "You there?", sender: "self" },
                        { text: "Yeah, hi, what's up?", sender: "other" }
                    ]
                },
                {
                    with: "Dad", convo: [
                        { text: "Have you finished your school work yet?", sender: "other" },
                        { text: "Yes.", sender: "self" },
                        { text: "What do you mean, yes?", sender: "other" },
                        { text: "??", sender: "self" }
                    ]
                },
                {
                    with: "Shoobert", convo: [
                        { text: "Shoobert!!!", sender: "self" },
                        { text: "Dude!!!!!!!!", sender: "other" },
                        { text: "Shooooooooo BERT!", sender: "self" },
                        { text: "You're my best friend", sender: "other" },
                        { text: "No, *you're* my best friend", sender: "self" },
                    ]
                }
            ]
        }
    )

    function displayConvo(withWhom) {
        if (withWhom !== null) {
            let newData = {...data}
            newData.displayConversation = withWhom
            setData(newData)
        }
    }

    function backToList() {
        let newData = {...data}
        newData.displayConversation = null
        setData(newData)
    }


    return (
            <div>
                {data.displayConversation === null ?
                    <div>
                        <h1>Contacts</h1>    
                        <div><List contacts={data.conversations.map(c => c.with)} displayConvo={displayConvo} /></div>
                        </div>
                :
                    <div>
                        <div><Conversation partner={data.displayConversation} convo={data.conversations.filter(c => (c.with === data.displayConversation)).map(c => c.convo)[0]} backToList={backToList} /></div>
                    </div>
                }
            </div>

    )


}

export default Exercise2