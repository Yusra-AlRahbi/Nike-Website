import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section
    className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map ((service,i)=> (
        <ServiceCard key={service.label} {...service}
        i={i*0.5}
        />
      ))}
    </section>
  )
}

export default Services