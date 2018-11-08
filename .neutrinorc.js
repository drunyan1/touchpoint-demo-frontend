module.exports = {
	use: [
		[
			'@neutrinojs/react',
			{
				html: {
					title: 'TouchPoint',
					links: [
						{
							href: 'https://fonts.googleapis.com/css?family=Muli:400,700,800',
							rel: 'stylesheet',
						},
						{
							href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
							rel: 'stylesheet',
						},
					],
				},
			},
		],
		'@usertech/neutrino-preset-eslint-prettier',
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
		(neutrino) => neutrino.config.output.publicPath('/'),
	],
};
