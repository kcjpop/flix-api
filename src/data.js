import api from './api.json'

export function getVersion() {
  return api.version
}

export function getNamespaces() {
  return api.namespaces
}

export function getNamespace(name) {
  return {
    name,
    classes: api.classes[name],
    enums: api.enums[name],
    typeAliases: api.typeAliases[name],
    defs: api.defs[name],
  }
}
