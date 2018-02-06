export class UtilsHelper {

    static frebicateFormData (data: Object, format: any) {

        const frebicateFormData: any = [];
        // tslint:disable-next-line:forin
        for ( const i in format) {
            const formatObj = format[i];
            // tslint:disable-next-line:one-line
            inner: for (const property in data){
                if (property === formatObj.field) {
                    const formatedData = formatObj;
                    formatedData.data = data[formatObj.field];
                    frebicateFormData.push(formatedData);
                    break inner;
                }
            }
        }

        return frebicateFormData;
    }

    static map

}
