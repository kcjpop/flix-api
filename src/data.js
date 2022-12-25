import api from './api.json'

export function getVersion() {
  return api.version
}

export function getNamespaces() {
  return api.namespaces
}

export function getNamespace(ns) {
  return {
    name: ns,
    classes: api.classes[ns],
    enums: api.enums[ns],
    typeAliases: api.typeAliases[ns],
    defs: api.defs[ns],
  }
}
