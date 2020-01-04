import * as SERVICES_KEYS from '../constants';

const services: { [key: string]: string } = {};

const serviceKeys = SERVICES_KEYS as { [key: string]: string };

Object.keys(serviceKeys).map(key => {
  if (key.includes('WORKPLUS_')) {
    const serviceName = key.replace('WORKPLUS_', '').toLocaleLowerCase();
    services[serviceKeys[key]] = serviceName;
  }
});

export { services };
