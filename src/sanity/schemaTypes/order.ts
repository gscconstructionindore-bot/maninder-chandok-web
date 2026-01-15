export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Razorpay Order ID',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'paymentId',
      title: 'Razorpay Payment ID',
      type: 'string'
    },
    {
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string'
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string'
    },
    {
      name: 'customerPhone',
      title: 'Customer Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(10).max(15)
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'status',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Created', value: 'created' },
          { title: 'Paid', value: 'paid' },
          { title: 'Failed', value: 'failed' }
        ]
      },
      initialValue: 'created'
    },
    {
      name: 'paidAt',
      title: 'Paid At',
      type: 'datetime'
    },
    {
      name: 'downloadToken',
      title: 'Download Token',
      type: 'string'
    }
  ],
  orderings: [
    {
      title: 'Created Date (Newest First)',
      name: 'createdDesc',
      by: [{ field: '_createdAt', direction: 'desc' }]
    },
    {
      title: 'Customer Phone',
      name: 'customerPhoneAsc',
      by: [{ field: 'customerPhone', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'productName',
      subtitle: 'customerPhone',
      amount: 'amount',
      status: 'status'
    },
    prepare(selection: any) {
      const { title, subtitle, amount, status } = selection;
      return {
        title: `${title} - ₹${amount}`,
        subtitle: `${subtitle} - ${status?.toUpperCase()}`
      };
    }
  }
}
