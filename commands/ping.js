const { SlashCommandBuilder, Embed, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('veja o ping do bot!'),

	async execute(interaction) {
		const embedPing = new EmbedBuilder()
		.setColor('Green')
		.setDescription(`Meu ping é ${interaction.client.ws.ping}`)


		await interaction.reply({ embeds: [embedPing], ephemeral: true });
	},
};