import ApiService from './ApiService'

/*export async function apiGetFleetDashboardData(data) {
    return ApiService.fetchData({
        url: '/fleet/dashboard',
        method: 'post',
        data,
    })
}

export async function apiGetFleetProducts(data) {
    return ApiService.fetchData({
        url: '/fleet/products',
        method: 'post',
        data,
    })
}

export async function apiGetFleetProduct(params) {
    return ApiService.fetchData({
        url: '/fleet/product',
        method: 'get',
        params,
    })
}*/

export async function apiGetFleetList(params) {
    return ApiService.fetchData({
        url: '/fleet/list',
        method: 'get',
        params,
    })
}
