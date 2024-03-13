import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'


function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isBestSale && <span>🔥</span>} {plant.name}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
						
						<PlantItem id={plant.id} name={plant.name} cover={plant.category} light={plant.light} water={plant.water} />
					</li>

				))}
			</ul>
		</div>
	)
}



export default ShoppingList
