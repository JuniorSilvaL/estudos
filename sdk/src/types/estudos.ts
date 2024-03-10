export type Estudos = {
    version: '0.1.0'
    name: 'estudos'
    instructions: [
      {
        name: 'createUser'
        accounts: [
          {
            name: 'signer'
            isMut: true
            isSigner: true
          },
          {
            name: 'user'
            isMut: true
            isSigner: false
          },
          {
            name: 'systemProgram'
            isMut: false
            isSigner: false
          }
        ]
        args: [
          {
            name: 'args'
            type: {
              defined: 'CreateUserArgs'
            }
          }
        ]
      }
    ]
    accounts: [
      {
        name: 'user'
        type: {
          kind: 'struct'
          fields: [
            {
              name: 'ts'
              type: 'i64'
            },
            {
              name: 'name'
              type: {
                array: ['u8', 32]
              }
            },
            {
              name: 'bump'
              type: 'u8'
            },
            {
              name: 'authority'
              type: 'publicKey'
            }
          ]
        }
      }
    ]
    types: [
      {
        name: 'CreateUserArgs'
        type: {
          kind: 'struct'
          fields: [
            {
              name: 'name'
              type: {
                array: ['u8', 32]
              }
            }
          ]
        }
      }
    ]
    errors: [
      {
        code: 6000
        name: 'InvalidAccount'
        msg: 'Invalid account'
      },
      {
        code: 6001
        name: 'Unauthorized'
        msg: 'Unauthorized access'
      }
    ]
  }
  
  export const IDL: Estudos = {
    version: '0.1.0',
    name: 'estudos',
    instructions: [
      {
        name: 'createUser',
        accounts: [
          {
            name: 'signer',
            isMut: true,
            isSigner: true
          },
          {
            name: 'user',
            isMut: true,
            isSigner: false
          },
          {
            name: 'systemProgram',
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: 'args',
            type: {
              defined: 'CreateUserArgs'
            }
          }
        ]
      }
    ],
    accounts: [
      {
        name: 'user',
        type: {
          kind: 'struct',
          fields: [
            {
              name: 'ts',
              type: 'i64'
            },
            {
              name: 'name',
              type: {
                array: ['u8', 32]
              }
            },
            {
              name: 'bump',
              type: 'u8'
            },
            {
              name: 'authority',
              type: 'publicKey'
            }
          ]
        }
      }
    ],
    types: [
      {
        name: 'CreateUserArgs',
        type: {
          kind: 'struct',
          fields: [
            {
              name: 'name',
              type: {
                array: ['u8', 32]
              }
            }
          ]
        }
      }
    ],
    errors: [
      {
        code: 6000,
        name: 'InvalidAccount',
        msg: 'Invalid account'
      },
      {
        code: 6001,
        name: 'Unauthorized',
        msg: 'Unauthorized access'
      }
    ]
  }