/*
    name   pour le nom de la plante ;
    cover   pour l'image correspondante ;
    id   qui correspond à l'item de chaque élément ;
    light ;
    water.
*/
//{name, cover, id, light, water}
    function PlantItem ({name, cover, id, light, water}) {
        console.log("#");
        console.log({name});
        console.log({cover});
        console.log({id});
        console.log({light});
        console.log({water});

        return <div className="lmj-plant-item-cover">{name}{cover}{id}{light}{water}</div>


    }
    export default PlantItem