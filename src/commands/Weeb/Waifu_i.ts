import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
// import { waifuR } from 'waifur'
const waifulist = require("public-waifulist");
const waifuclient = new waifulist()

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'infowaifu',
            description: 'Get waifu images with details',
            category: 'weeb',
            usage: `${client.config.prefix}infowaifu`,
            
        })
    }

    
    run = async (M: ISimplifiedMessage): Promise<void> => {
        
        
        
//         await  waifuR(waifu => {
// console.log(res)
// return void M.reply( request.buffer(res.background_image), MessageType.image, undefined, undefined, `š *NAME* : ${res.name}\nā¤ļø *ALTARNATE NAME* : ${res.alternate_name}\nšļø *ANIME NAME* : ${res.appears_in}\nš *AGE* : ${res.age}, ${res.birthday}\nš *HIGHT* :${res.height}\nāļø *WEIGHT* : ${res.weight}\nš©ø *BLOOD TYPE* : ${res.blood_type}\nš *DESCRIPTION* : ${res.description}\n` )


//         })
// var waifu = await waifuR()
// return void M.reply(await  request.buffer(waifuR().background_image), MessageType.image, undefined, undefined, `š *NAME* : ${waifuR().name}\nā¤ļø *ALTARNATE NAME* : ${waifuR().alternate_name}\nšļø *ANIME NAME* : ${waifuR().appears_in}\nš *AGE* : ${waifuR().age}, ${waifuR().birthday}\nš *HIGHT* :${waifuR().height}\nāļø *WEIGHT* : ${waifuR().weight}\nš©ø *BLOOD TYPE* : ${waifuR().blood_type}\nš *DESCRIPTION* : ${waifuR().description}\n` )
const waifu = await waifuclient.getRandom()
console.log(waifu)
return void M.reply(await request.buffer(waifu.data.display_picture), MessageType.image, undefined, undefined, `š *NAME* : ${waifu.data.name}\nā¤ļø *ORIGINAL NAME* : ${waifu.data.original_name}\nš *AGE* : ${waifu.data.age}\nāļø *CREATOR* : ${waifu.data.creator.name}\nš¬ *ANIME NAME* : ${waifu.data.series.name}\nāØ *CHARACTER DESCRIPTION* : ${waifu.data.description}\nš *ANIME DESCRIPTION* : ${waifu.data.series.description}\nš *LIKES* : ${waifu.data.LIKES}\nš *LIKE RATE* : ${waifu.data.like_rank}\nš *URL* : ${waifu.data.url} ` )
    }





}
