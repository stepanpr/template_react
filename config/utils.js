/** Класс формирующий новый конфиг; содержит методы для его расширения. */
module.exports = class Config {
	constructor(conf) {
	this.config = conf
	}
	
	/** Возвращает конечный конфиг. */
	getConfig() {
	return this.config
	}
	
	/** Устанавливат мод. */
	setMode(mode) {
	this.config.mode = mode
	return this
	}
	
	/** Расширяет массив правил 'module.rules'. */
	extendRules(newRule) {
	this.config.module.rules.push(newRule)
	return this
	}
	
	/** Расширяет массив плагинов. */
	extendPlugins(newPlugin) {
	if (!this.config.plugins) {
	this.config['plugins'] = []
	}
	this.config['plugins'].push(newPlugin)
	return this
	}
	
	/** Добавляет массив плагинов. */
	addPlugins(plugins) {
	if (this.config.plugins) {
	this.config['plugins'] = null
	}
	this.config['plugins'] = plugins
	return this
	}
	
	/** Добавляет параметр для resolve. */
	extendResolve(name, value) {
	this.config.resolve[name] = value
	return this
	}
	
	/** Добавляет свойство верхнего уровня. */
	addProperty(name, value) {
	this.config[name] = value
	
	return this
	}
}