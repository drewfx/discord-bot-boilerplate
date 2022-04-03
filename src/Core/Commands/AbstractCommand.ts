import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js"
import { ICommand } from "./ICommand";

class Command implements ICommand {
  protected name = "hello"
  protected description = "Returns a greeting"
  protected type?: "CHAT_INPUT"

  public run(client: Client, interaction: BaseCommandInteraction): void  {
    const content = "Hello there!";

    interaction.followUp({ephemeral: true, content})
      .then(r => r)
      .catch(e => e)
  }
}

export default Command
