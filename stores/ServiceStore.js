import { types, flow } from 'mobx-state-tree'
import { fetchServices, fetchService, searchServices } from './services/servicesService'

const ServiceStore = types
  .model('ServiceStore', {
    services: types.array(types.frozen()),
    service: types.frozen(),
    selected: types.array(types.number),
  })
  .actions((self) => {
    return {
      fetchServices: flow(function* fetchServicesAction() {
        try {
          const data = yield fetchServices()
          self.services = data
        } catch (error) {
          console.error('Failed to fetch services:', error)
        }
      }),

      fetchService: flow(function* fetchServiceAction(id) {
        try {
          const data = yield fetchService(id)
          self.service = data
        } catch (error) {
          console.error(`Failed to fetch service with ID ${id}:`, error)
        }
      }),
      searchServices: flow(function* searchServicesAction(query) {
        try {
          const data = yield searchServices(query)
          self.services = data
        } catch (error) {
          console.error('Failed to search services:', error)
        }
      }),
      setSelectedServices: flow(function* selectedServicesAction(query) {
        self.selected = query
      }),
    }
  })

export default ServiceStore
