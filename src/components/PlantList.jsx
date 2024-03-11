
import { plantList } from '../datas/plantList';


function PlantList () {
    const noDuplicateItems = plantList.map(p => p.category).reduce((accumulator, item) => {
        if (!accumulator.includes(item)) {
            accumulator.push(item);
        }
        return accumulator;
        }, []);
        return noDuplicateItems;
}


export default PlantList