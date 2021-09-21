import api from "./apiConfig"

export const getAllReceipts = async () => {
  const res = await api.get("/receipts")
  return res.data
}

export const getOneReceipt = async (receiptID) => {
  const res = await api.get(`/receipts/${receiptID}`)
  return res.data
}

export const deleteReceipt = async (receiptID) => {
  await api.delete(`/receipts/${receiptID}`)
}

export const createReceipt= async (receiptData) => {
  const res = await api.post("/receipts", { receipt: receiptData })
  return res.data
}

export const updateReceipt = async (receiptData, receiptID) => {
  const res = await api.put(`/receipts/${receiptID}`, { receipt: receiptData })
  return res.data
}

export const addFlavorToFood = async (flavorData, foodID) => {
  const res = await api.put(`/foods/${foodID}/add_flavor`, {flavor: flavorData})
  return res.data
}