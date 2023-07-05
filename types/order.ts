export interface OrderDetail {
  id: string
  shortId: string
  rowNumber: number
  name: string
  unitPrice: number
  quantity: number
  taxRate: number
}

export interface Order {
  id: string
  shortId: string
  sequense: number
  customer: string
  totalAmountWithoutTax: number,
  totalAmountWithTax: number,
  submitter: string
  submitDate: Date
  approver: string
  draft: boolean
  approvalStage: string
}
