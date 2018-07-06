var SlackBot = require('slackbots');
var axios = require('axios');

var bot = new SlackBot({
    token: 'xoxb-383753246993-385348336519-2Q2BC9v6MZsyWKBvXe5RqYje',
    name: 'house-elf'
});

// Starting Handler
bot.on('start',() => {
    var params = {
        icon_emoji: ':smiley:'
    }
    
    bot.postMessageToChannel(
        'general',
        'Hi!! I\'m lar... The house elf. \n Welcome to Amrita CSA Developer chat room.',
        params
    );
});

bot.on('error', (err) => console.log(err));

bot.on('message', (data) => {
    if(data.type !== 'message'){
        bot.postMessageToChannel('general', "Hello There...");
        return;
    }
    else{
        return;
    }
    
});

function handleMessage(message){
    if(message === 'hi' || message === 'HI')
    {
        
        bot.on('message',() => {
            
        }
        );
    }
}


// TODO: Complete the bot