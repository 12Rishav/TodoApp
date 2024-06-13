module.exports = {
    schemas: {
      Todo: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },
          user_id: {
            type: 'integer',
            example: 1,
          },
          title: {
            type: 'string',
            example: 'Buy groceries',
          },
          description: {
            type: 'string',
            example: 'Milk, Bread, Butter',
          },
          completed: {
            type: 'boolean',
            example: false,
          },
          created_at: {
            type: 'string',
            format: 'date-time',
            example: '2023-01-01T00:00:00Z',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
            example: '2023-01-01T00:00:00Z',
          },
          deleted_at: {
            type: 'string',
            format: 'date-time',
            example: null,
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },
          email: {
            type: 'string',
            example: 'user@example.com',
          },
          token: {
            type: 'string',
            example: 'sometoken',
          },
          created_at: {
            type: 'string',
            format: 'date-time',
            example: '2023-01-01T00:00:00Z',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
            example: '2023-01-01T00:00:00Z',
          },
          deleted_at: {
            type: 'string',
            format: 'date-time',
            example: null,
          },
        },
      },
    },
  };
  