import axios from 'axios'

const BASE_URL = 'http://localhost:9000/v1/widgets'

export const fetchAllWidgets = () => axios.get(BASE_URL).then((response) => response.data)

export const createWidgets = (widgets) => axios.post(BASE_URL, widgets)

export const fetchWidgetByName = (widgetName) => axios.get(`${BASE_URL}/${widgetName}`).then((response) => response.data)

export const fetchWidgetDescriptionByName = (widgetName) => axios.get(`${BASE_URL}/${widgetName}/description`).then((response) => response.data)

export const fetchWidgetPriceByName = (widgetName) => axios.get(`${BASE_URL}/${widgetName}/price`).then((response) => response.data)

export const deleteWidgetByName = (widgetName) => axios.delete(`${BASE_URL}/${widgetName}`)

export const updateWidgetDescription = (widgetName, newDescription) => axios.put(`${BASE_URL}/${widgetName}/description`, { description: newDescription })

export const updateWidgetPrice = (widgetName, newPrice) => axios.put(`${BASE_URL}/${widgetName}/price`, { price: newPrice })