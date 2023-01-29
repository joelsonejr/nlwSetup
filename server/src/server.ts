import Fastify from 'fastify';
import {PrismaClient} from '@prisma/client';
import cors from '@fastify/cors';

const app =  Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async () => { 
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'Tomar'
      }
    }
  })

  return habitsR$ 334,80
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running');
})