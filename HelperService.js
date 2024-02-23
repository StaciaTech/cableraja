
class HelperService {

    async asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            // console.log(index)
            await callback(array[index], index, array);
        }
    }
}


export default new HelperService();