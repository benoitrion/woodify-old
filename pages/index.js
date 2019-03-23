import Layout from '../components/Layout.js'
import Link from 'next/link'
import getParcels from '../parcel-data'

const CommonDetails = ({ parcels }) => (
  parcels.reduce((a, b) => (
    <ul>
      <li>{a.area + b.area}</li>
      <li>{a.revenues + b.revenues}</li>
      <li>{a.expenses + b.expenses}</li>
    </ul>
  ))
)

const ParcelLink = ({ parcel }) => (
  <li>
    <Link as={`/p/${parcel.id}`} href={`/parcel?title=${parcel.title}`}>
      <a>{parcel.title}</a>
    </Link>
  </li>
)

const ParcelList = ({ parcels }) => (
  <ul>
    {parcels.map(parcel => (
      <ParcelLink key={parcel.id} parcel={parcel} />
    ))}
  </ul>
)

const Index = (props) => (
  <Layout>
    <h1>Woodify</h1>
    <CommonDetails parcels={props.parcels} />
    <ParcelList parcels={props.parcels} />
  </Layout>
)

Index.getInitialProps = async function () {
  return {
    parcels: await getParcels()
  }
}

export default Index