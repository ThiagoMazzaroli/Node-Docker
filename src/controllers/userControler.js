import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {

    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });


        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: "erro" })
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const users = await prisma.user.findMany();

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "erro" })
    }
}

export const deleteUser = async (req, res) => {

    try {
        const { id } = req.params;

        const deletedUser = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });

        res.status(200).json(deleteUser)
    } catch (error) {
        res.status(500).json({ error: "erro" })
    }
}

export const updateUser = async (req, res) => {

    const { id } = req.params;

    try {
        await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        }

        );
        res.status(200).json({ message: "Atualizado!" })

    } catch (error) {
        res.status(500).json({ error: "erro" })
    }
}


