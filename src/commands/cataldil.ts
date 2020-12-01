import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'Çatal Dil';
    summary = 'Çatal dili konuşur...';
    precondition: Permission = '';
    cooldown = 3;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        await ctx.channel.send(`Shaiyyaa Assahaa Şseee`);
    }
}
