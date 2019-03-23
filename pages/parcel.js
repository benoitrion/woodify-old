import Layout from '../components/Layout.js'
import getParcels from '../parcel-data'

const ParcelDetails = ({ parcel }) => (
    <ul>
      <li>{parcel.area}</li>
      <li>{parcel.type}</li>
      <li>{parcel.expenses}</li>
      <li>{parcel.revenues}</li>
      <li>N/A</li>
    </ul>
)
const ParcelSellingDetails = ({ parcel }) => (
  <ul>
    <li>{parcel.seller}</li>
    <li>{parcel.price}</li>
    <li>{parcel.notaryFees}</li>
  </ul>
)
const ParcelTasks = ({ parcel }) => (
  <ul>
    {parcel.tasks.map(task => (
      <li key={task.id} >{task.description} on the {task.date} </li>
    ))}
  </ul>
)
const Parcel = props => (
  <Layout>
    <h1>{props.parcel.title}</h1>
    <ParcelDetails parcel={props.parcel} />
    <ParcelSellingDetails parcel={props.parcel} />
    <ParcelTasks parcel={props.parcel} />
  </Layout>
)

Parcel.getInitialProps = async function(context) {
  const { id } = context.query
  const filteredParcels = await getParcels().filter(p => p.id === id)
  const parcel = filteredParcels[0];

  console.log(`Fetched parcel: ${parcel.title}`)

  return { parcel }
  
}

export default Parcel