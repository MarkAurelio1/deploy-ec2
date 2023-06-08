const { prisma } = require('../../libs/index')

module.exports = {
    Query: {
        users:() => prisma.user.findMany()
        
    },
    Mutation: {
        createUser: async (_, {data}) => {
            const user = await  prisma.user.create({
                data,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: true,
                }
            })
            return user
        },
        updateUser: async (_, {id, data}) => {
            const user = await prisma.user.update({
                where: { id },
                data,
            })
            return user
        },
        deleteUser: async (_, {id}) => {
            await prisma.user.delete({
                where: { id },
            })
            return true
        }
    }

 
}