/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help6",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h6','?6','well6','menu6']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/Sg88vTHh4j0AAAPo/zero-two-anime.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `âââ°â¢ðððªððð©ðð«ðâ¢â±ââ
â ${this.client.config.prefix}ÊÊá´ÉªÉ´ÊÊ 
â ${this.client.config.prefix}á´á´Êá´á´Êá´á´á´Ê 
â ${this.client.config.prefix}á´á´á´ Éªá´ 
â ${this.client.config.prefix}á´ÊÊá´á´á´ 
â ${this.client.config.prefix}á´Êá´á´á´É´á´ 
â ${this.client.config.prefix}á´ÊÉªá´ Éªá´ 
â ${this.client.config.prefix}á´ÊÊá´É´á´Éªá´á´Éªá´É´á´ÊÊ 
â ${this.client.config.prefix}Éªá´ 
â ${this.client.config.prefix}á´¡á´á´á´Êá´Ê
â ${this.client.config.prefix}sá´á´á´á´
âââââââââââ
ð É´á´á´á´: á´ê±á´ ${this.client.config.prefix}Êá´Êá´ <á´á´á´á´á´É´á´_É´á´á´á´> á´á´ á´ Éªá´á´¡ á´Êá´ á´á´á´á´á´É´á´ ÉªÉ´ê°á´.
âââââââââââ    
    `,
			}
		);
	};
}
