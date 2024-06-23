export {
    createElement,
    addMessage
}
const createElement = (tag, classNameS, parent, attributes = {}, id) => {
    let element = document.createElement(tag);
    // if (className) element.className = className;
    if(!classNameS.length == 0)
    for(let className of classNameS) {
        element.classList.add(className);
    }
    for (let key in attributes) {
        element[key] = attributes[key];
    }
    // console.log(id)
    if (id) element.id = id;
    if (parent) parent.appendChild(element);
    
    return element;
}

const addMessage = (owner,message) => {
    let content = document.getElementById('message-container');
    let ownerString = (owner == 'talkgpt') ? 'talk-gpt-message' : 'user-message';
    let nameString = (owner == 'talkgpt') ? 'TalkGPT' : 'User';
    
    let messageContainer = createElement('div',[],
        createElement('li',['message-item',ownerString],content,{})
    ,{});
    
    createElement('p',[],
        createElement('div',['name'],messageContainer,{})
    ,{innerText: nameString});
    let messageAnimation = createElement('p',[],
        createElement('div',['message'],messageContainer,{})
    ,{innerText: ''});
    if(owner != 'talkgpt') messageAnimation.innerText = message;
    else {
        // let currentMessage = '';
        let index = 0;
        let isSpace = false;
        let intervalId = setInterval(() => {
            console.log(message[index])
            if(message[index] == ' '){
                isSpace = true;
            } else {
                messageAnimation.innerText += (isSpace) ? ' ' + message[index] : message[index];
                isSpace = false;
            }
            
            // console.log(message[index] + " " + message.charCodeAt(index))
            index++;
            if(index >= message.length) clearInterval(intervalId);
            content.scrollTo(1, content.scrollHeight);
        }, 4/message.length)
        
        
    }


    content.scrollTo(0, content.scrollHeight);
}