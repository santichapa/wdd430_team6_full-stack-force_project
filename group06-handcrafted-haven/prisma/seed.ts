import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // First, create the artist/user
    const artist = await prisma.user.upsert({
    where: { email: 'artist@example.com' },
    update: {},
    create: {
        id: 'ccf2e5c3-9356-4d0e-b19d-dbc855815810',
        name: 'Artisan Creator',
        email: 'artist@example.com',
        password: 'hashedpassword',
        isArtist: true,
        description: 'Passionate creator of handmade crafts and artistic pieces.',
    },
    });

    console.log('Created artist:', artist.name);

    console.log("Seed script started");
  const products = [
    {
      id: "90217eda-97ce-4dab-ac47-6195c99816db",
      title: "Painted Clay Vase",
      description: "A vibrant, hand-painted clay vase with traditional patterns.",
      imageUrl: "https://images.pexels.com/photos/18646120/pexels-photo-18646120/free-photo-of-man-decorating-vase.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 70,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "fd344c07-20b1-45f6-a3a6-40fd60842d50",
      title: "Hand-Carved Wooden Spoon Set",
      description: "A set of hand-carved wooden spoons, perfect for cooking.",
      imageUrl: "https://images.pexels.com/photos/7283473/pexels-photo-7283473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 30,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "6e3e09ea-782e-4029-84b0-f5fb252dba13",
      title: "Embroidered Cushion Cover",
      description: "Soft cushion cover with intricate embroidered designs.",
      imageUrl: "https://images.pexels.com/photos/27355175/pexels-photo-27355175/free-photo-of-slipcover-kas-code-ca250-and-link-in-bio-maple-majesty-reversible-chenille-blanket-covers-for-couch-furniture-decoration-cover-sofa-slipcovers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 45,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "36b28f82-ec26-4080-8f19-9d47094e306d",
      title: "Hand-Painted Ceramic Plate",
      description: "A stunning ceramic plate with artistic hand-painted details.",
      imageUrl: "https://images.pexels.com/photos/18273388/pexels-photo-18273388/free-photo-of-homemade-ceramic-tableware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 55,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "431c269e-0436-4a17-b670-9917a35c1874",
      title: "Handcrafted Wooden Chess Set",
      description: "A premium chess set made from hand-carved wood pieces.",
      imageUrl: "https://images.pexels.com/photos/20992934/pexels-photo-20992934/free-photo-of-wooden-chess-pieces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 80,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "16e07153-035b-4019-bc5c-e1968af435dc",
      title: "Artisan Scented Candle",
      description: "A hand-poured scented candle with natural essential oils.",
      imageUrl: "https://images.pexels.com/photos/28750445/pexels-photo-28750445/free-photo-of-creative-flat-lay-of-decorative-candles-with-pinecones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 20,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "6e434781-76e0-4112-9384-14852c6f736f",
      title: "Handmade Ceramic Mug",
      description: "A beautiful, handcrafted ceramic mug.",
      imageUrl: "https://images.pexels.com/photos/3187013/pexels-photo-3187013.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 25,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "da2f5a1c-99d0-44a8-b4c1-de7072949046",
      title: "Knitted Scarf",
      description: "Warm and cozy scarf made from organic wool.",
      imageUrl: "https://images.pexels.com/photos/30549063/pexels-photo-30549063/free-photo-of-happy-couple-posing-outdoors-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 40,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "b70440da-642d-439e-a974-da31d81f9f00",
      title: "Wooden Jewelry Box",
      description: "Hand-carved jewelry box with intricate designs.",
      imageUrl: "https://images.pexels.com/photos/29135632/pexels-photo-29135632/free-photo-of-vintage-wooden-sewing-box-with-dark-background.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 60,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "83521a67-4b99-470c-be59-c26c9197671f",
      title: "Leather Notebook Cover",
      description: "Hand-stitched leather notebook cover with vintage appeal.",
      imageUrl: "https://images.pexels.com/photos/7853813/pexels-photo-7853813.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 35,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
    {
      id: "8ccd3db8-00d7-4e55-9d74-a6b10c712f45",
      title: "Handwoven Basket",
      description: "Beautiful handwoven basket made from natural fibers.",
      imageUrl: "https://images.pexels.com/photos/9476353/pexels-photo-9476353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: 50,
      artistId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810",
      createdAt: new Date("2025-06-03T01:11:24.472Z"),
      timesViewed: 0,
    },
  ];

  console.log("About to insert products");
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });
  console.log("Products seeded!");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })