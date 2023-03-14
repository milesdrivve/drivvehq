import wildCardSearch from 'utils/wildCardSearch'
import sortBy from 'utils/sortBy'
import paginate from 'utils/paginate'

export default function customerFakeApi(server, apiPrefix) {

    server.get(`${apiPrefix}/customers/list`, (schema, { queryParams }) => {
        const { pageIndex, pageSize, sort, query } = queryParams
        const { order, key } = JSON.parse(sort)
        const orders = schema.db.customerListData
        const sanitizeProducts = orders.filter(
            (elm) => typeof elm !== 'function'
        )
        let data = sanitizeProducts
        let total = orders.length

        if (key) {
            if (
                (key === 'date' ||
                    key === 'status' ||
                    key === 'paymentMehod') &&
                order
            ) {
                data.sort(sortBy(key, order === 'desc', parseInt))
            } else {
                data.sort(sortBy(key, order === 'desc', (a) => a.toUpperCase()))
            }
        }

        if (query) {
            data = wildCardSearch(data, query)
            total = data.length
        }

        data = paginate(data, pageSize, pageIndex)

        const responseData = {
            data: data,
            total: total,
        }
        return responseData
    })

    server.get(
      `${apiPrefix}/customers/customer-details`,
      (schema, { queryParams }) => {
          const id = queryParams.id
          const user = schema.db.customerListData.find(id)
          return user
      }
    )

    server.put(`${apiPrefix}/customers/customers`, (schema, { requestBody }) => {
      const data = JSON.parse(requestBody)
      const { id } = data
      schema.db.customerListData.update({ id }, data)
      return {}
  })
}
