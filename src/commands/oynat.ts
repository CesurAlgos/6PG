import { Command, CommandContext, Permission } from './command';
import Deps from '../utils/deps';
import { GuildMember } from 'discord.js';
import Music from '../modules/music/music';

export default class PlayCommand implements Command {
    aliases = ['p'];
    cooldown = 2;
    module = 'Music';
    name = 'oynat';
    precondition: Permission = 'SPEAK';
    summary = 'Join and play a YouTube result.';
    usage = 'play query'

    constructor(private music = Deps.get<Music>(Music)) {}
    
    execute = async(ctx: CommandContext, ...args: string[]) => {
        const query = args?.join(' ');
        if (!query)
            throw new TypeError('Query must be provided.');

        const player = this.music.joinAndGetPlayer(ctx.member.voice.channel, ctx.channel);

        const maxQueueSize = 5;
        if (player.q.length >= maxQueueSize)
            throw new TypeError(`Maximum liste uzunluğu \`${maxQueueSize}\`.`);

        const track = await player.play(query);
        if (player.isPlaying)
            return ctx.channel.send(`**Listeye Eklendi**: \`${track.title}\`.`);
    }
}
