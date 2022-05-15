import _ from 'lodash'

export const titleCase = (str) => {
    return _.startCase(_.camelCase(str))
}