import Config from './Core/Config'
import {Client, Intents, Interaction} from 'discord.js'

// Retrieve .env
const config = new Config().get()

// Start Client
const client = new Client(
  { intents: [Intents.FLAGS.GUILDS] }
)

// @todo: Get Commands
const commands: Command[] = []

client.on('ready', () => {
  if (!client.user || !client.application) {
    return;
  }

  console.log(
    ' ___                  ___      _                  \n' +
    '| __|__ __ ___       | __| __ | |_   ___  ___  ___\n' +
    '| _| \\ V // -_)      | _| / _||   \\ / _ \\/ -_)(_-/\n' +
    '|___| \\_/ \\___|      |___|\\__||_||_|\\___/\\___|/__/\n'
  )

  await client.application.commands.set(commands);
})

client.on('interactionCreate', async (interaction: Interaction) => {
  console.log(interaction)
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply('Server info.');
  } else if (commandName === 'user') {
    await interaction.reply('User info.');
  }
});

void client.login(config.TOKEN)
  .catch(() => {
    throw new Error('Could not login to Discord.  Please double check your token.')
  })
