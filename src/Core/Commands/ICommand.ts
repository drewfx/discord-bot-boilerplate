import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js"

export interface ICommand extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: BaseCommandInteraction) => void
}
