const { INCREMENTO, DECREMENTO } = require('../action-types');

const incremento = () => {
	return {
		type: INCREMENTO,

	}
};

const decremento = () => {
	return {
		type: DECREMENTO,

	}
};

module.exports = {
	incremento,
	decremento
}