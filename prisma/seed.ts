import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  // Delete any Membership records from previous seeds
  await prisma.membership.deleteMany({});

  // Create new Membership records
  const basicMembership = await prisma.membership.create({
    data: {
      level: "Basic",
      description: "1 martial art - 2 sessions per week. Monthly fee.",
      price: "£25.00",
    },
  });
  // const intermediateMembership = await prisma.membership.create({
  //   data: {
  //     level: "Intermediate",
  //     description: "1 martial art - 3 sessions per week. Monthly fee.",
  //     price: "£35.00",
  //   },
  // });
  // const advancedMembership = await prisma.membership.create({
  //   data: {
  //     level: "Advanced",
  //     description: "2 martial arts - 5 sessions per week. Monthly fee.",
  //     price: "£45.00",
  //   },
  // });
  // const eliteMembership = await prisma.membership.create({
  //   data: {
  //     level: "Elite",
  //     description: "Unlimited classes. Monthly fee.",
  //     price: "£60.00",
  //   },
  // });
  // const juniorMembership = await prisma.membership.create({
  //   data: {
  //     level: "Junior",
  //     description: "Unlimited kids sessions. Monthly fee.",
  //     price: "£25.00",
  //   },
  // });

  let email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  let hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      membershipId: basicMembership.id,
    },
  });

  email = "d@veholm.es";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  hashedPassword = await bcrypt.hash("password", 10);

  const user2 = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "I can write notes too",
      body: "I am an Intermediate member!",
      userId: user2.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
