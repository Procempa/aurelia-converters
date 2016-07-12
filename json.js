export class JsonValueConverter {
	toView(value) {
		let json = "\n";
		json += JSON.stringify(value, null, 4);
		return json;
	}
}
