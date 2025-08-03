import type { CardExampleProps } from '@/modules/home/interfaces/cardExampleProps'

export const schemasExamples: CardExampleProps[] = [
  {
    description: 'Esquema simple para datos de usuario',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    },
    title: 'Usuario Básico',
  },
  {
    description: 'Esquema para la información de un producto de eCommerce',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        price: { type: 'number', minimum: 0 },
        inStock: { type: 'boolean' },
        tags: { type: 'array', items: { type: 'string' } },
      },
      required: ['id', 'name', 'price'],
    },
    title: 'Producto',
  },
  {
    description: 'Esquema para un pedido de un cliente',
    schema: {
      type: 'object',
      properties: {
        orderId: { type: 'string' },
        customerEmail: { type: 'string', format: 'email' },
        orderDate: { type: 'string', format: 'date-time' },
        totalAmount: { type: 'number' },
        status: { type: 'string', enum: ['pending', 'shipped', 'delivered'] },
      },
      required: ['orderId', 'customerEmail', 'totalAmount'],
    },
    title: 'Pedido',
  },
  {
    description: 'Esquema para un artículo de blog o post',
    schema: {
      type: 'object',
      properties: {
        postId: { type: 'string' },
        title: { type: 'string' },
        author: { type: 'string' },
        publishedAt: { type: 'string', format: 'date' },
        content: { type: 'string' },
        tags: { type: 'array', items: { type: 'string' } },
      },
      required: ['postId', 'title', 'author', 'content'],
    },
    title: 'Post de Blog',
  },
]
