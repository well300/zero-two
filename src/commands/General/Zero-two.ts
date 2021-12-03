import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'zero-two',
            description: `Get cara's repo`,
            aliases: ['zero-two','z2','zero2','zero two'],
            category: 'general',
            usage: `${client.config.prefix}zero-two`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        
        return void M.reply( await request.buffer(`https://www.digitalartsonline.co.uk/cmsdata/slideshow/3441290/6.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `*zero-two*: *well*`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`❌ An error occurred. Please try again later.`))
    }
}

