import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'yapımcın';
    summary = 'Yapımcısını söyler...';
    precondition: Permission = '';
    cooldown = 3;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        await ctx.channel.send(`***R0D3***`);
    }
}
