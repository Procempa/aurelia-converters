import moment from "moment";
import "moment/locale/pt-br";

export class DataValueConverter {
	toView(value) {
		return moment(value).locale("pt-br").format("LLL");
	}
}
