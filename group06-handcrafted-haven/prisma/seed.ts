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
      password: 'hashedpassword', // In real app, this should be properly hashed
      isArtist: true,
      description: 'Passionate creator of handmade crafts and artistic pieces.',
    },
  });

  console.log('Created artist:', artist.name);

  // Then create the products
  await prisma.product.createMany({
    data: [
      {
        title: 'Handmade Ceramic Mug',
        description: 'A beautiful, handcrafted ceramic mug.',
        imageUrl: 'https://images.pexels.com/photos/3187013/pexels-photo-3187013.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 25.0,
        artistId: artist.id,
      },
      {
        title: 'Knitted Scarf',
        description: 'Warm and cozy scarf made from organic wool.',
        imageUrl: 'https://images.pexels.com/photos/30549063/pexels-photo-30549063/free-photo-of-happy-couple-posing-outdoors-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 40.0,
        artistId: artist.id,
      },
      {
        title: 'Wooden Jewelry Box',
        description: 'Hand-carved jewelry box with intricate designs.',
        imageUrl: 'https://images.pexels.com/photos/29135632/pexels-photo-29135632/free-photo-of-vintage-wooden-sewing-box-with-dark-background.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 60.0,
        artistId: artist.id,
      },
      {
        title: 'Leather Notebook Cover',
        description: 'Hand-stitched leather notebook cover with vintage appeal.',
        imageUrl: 'https://images.pexels.com/photos/7853813/pexels-photo-7853813.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 35.0,
        artistId: artist.id,
      },
      {
        title: 'Handwoven Basket',
        description: 'Beautiful handwoven basket made from natural fibers.',
        imageUrl: 'https://images.pexels.com/photos/9476353/pexels-photo-9476353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 50.0,
        artistId: artist.id,
      },
      {
        title: 'Painted Clay Vase',
        description: 'A vibrant, hand-painted clay vase with traditional patterns.',
        imageUrl: 'https://images.pexels.com/photos/18646120/pexels-photo-18646120/free-photo-of-man-decorating-vase.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 70.0,
        artistId: artist.id,
      },
      {
        title: 'Hand-Carved Wooden Spoon Set',
        description: 'A set of hand-carved wooden spoons, perfect for cooking.',
        imageUrl: 'https://images.pexels.com/photos/7283473/pexels-photo-7283473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 30.0,
        artistId: artist.id,
      },
      {
        title: 'Embroidered Cushion Cover',
        description: 'Soft cushion cover with intricate embroidered designs.',
        imageUrl: 'https://images.pexels.com/photos/27355175/pexels-photo-27355175/free-photo-of-slipcover-kas-code-ca250-and-link-in-bio-maple-majesty-reversible-chenille-blanket-covers-for-couch-furniture-decoration-cover-sofa-slipcovers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 45.0,
        artistId: artist.id,
      },
      {
        title: 'Hand-Painted Ceramic Plate',
        description: 'A stunning ceramic plate with artistic hand-painted details.',
        imageUrl: 'https://images.pexels.com/photos/18273388/pexels-photo-18273388/free-photo-of-homemade-ceramic-tableware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 55.0,
        artistId: artist.id,
      },
      {
        title: 'Handcrafted Wooden Chess Set',
        description: 'A premium chess set made from hand-carved wood pieces.',
        imageUrl: 'https://images.pexels.com/photos/20992934/pexels-photo-20992934/free-photo-of-wooden-chess-pieces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 80.0,
        artistId: artist.id,
      },
      {
        title: 'Artisan Scented Candle',
        description: 'A hand-poured scented candle with natural essential oils.',
        imageUrl: 'https://images.pexels.com/photos/28750445/pexels-photo-28750445/free-photo-of-creative-flat-lay-of-decorative-candles-with-pinecones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        price: 20.0,
        artistId: artist.id,
      },
    ],
  });

  console.log('Products created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });