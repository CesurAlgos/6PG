import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'adın ne';
    summary = 'Send help...';
    precondition: Permission = '';
    cooldown = 3;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        await ctx.channel.send(`nagini`);
    }
}
