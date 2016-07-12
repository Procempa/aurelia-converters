import numeral from "numeral";

export class MonetarioValueConverter {
	toView(value) {
		numeral.language("pt-br", {
			delimiters: {
				thousands: ".",
				decimal: ","
			},
			abbreviations: {
				thousand: "mil",
				million: "milhões",
				billion: "b",
				trillion: "t"
			},
			ordinal: function () {
				return "º";
			},
			currency: {
				symbol: "R$"
			}
		});
		numeral.language("pt-br");
		value = (value + "").replace(/[^0-9 ]/g, "");
		value = `${value.substring(0, value.length-2)}.${value.substring(value.length-2)}`;
		return numeral(value).format("($0,0.00)");
	}
}
