import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Replace with a real artist/user ID from your database
  const artistId = 'ccf2e5c3-9356-4d0e-b19d-dbc855815810';

await prisma.product.createMany({
    data: [
        {
            title: 'Handmade Ceramic Mug',
            description: 'A beautiful, handcrafted ceramic mug.',
            imageUrl: 'https://example.com/mug.jpg',
            price: 25.0,
            artistId,
        },
        {
            title: 'Knitted Scarf',
            description: 'Warm and cozy scarf made from organic wool.',
            imageUrl: 'https://example.com/scarf.jpg',
            price: 40.0,
            artistId,
        },
        {
            title: 'Wooden Jewelry Box',
            description: 'Hand-carved jewelry box with intricate designs.',
            imageUrl: 'https://example.com/box.jpg',
            price: 60.0,
            artistId,
        },
        {
            title: 'Leather Notebook Cover',
            description: 'Hand-stitched leather notebook cover with vintage appeal.',
            imageUrl: 'https://example.com/notebook.jpg',
            price: 35.0,
            artistId,
        },
        {
            title: 'Handwoven Basket',
            description: 'Beautiful handwoven basket made from natural fibers.',
            imageUrl: 'https://example.com/basket.jpg',
            price: 50.0,
            artistId,
        },
        {
            title: 'Painted Clay Vase',
            description: 'A vibrant, hand-painted clay vase with traditional patterns.',
            imageUrl: 'https://example.com/vase.jpg',
            price: 70.0,
            artistId,
        },
        {
            title: 'Hand-Carved Wooden Spoon Set',
            description: 'A set of hand-carved wooden spoons, perfect for cooking.',
            imageUrl: 'https://example.com/spoons.jpg',
            price: 30.0,
            artistId,
        },
        {
            title: 'Embroidered Cushion Cover',
            description: 'Soft cushion cover with intricate embroidered designs.',
            imageUrl: 'https://example.com/cushion.jpg',
            price: 45.0,
            artistId,
        },
        {
            title: 'Hand-Painted Ceramic Plate',
            description: 'A stunning ceramic plate with artistic hand-painted details.',
            imageUrl: 'https://example.com/plate.jpg',
            price: 55.0,
            artistId,
        },
        {
            title: 'Handcrafted Wooden Chess Set',
            description: 'A premium chess set made from hand-carved wood pieces.',
            imageUrl: 'https://example.com/chess.jpg',
            price: 80.0,
            artistId,
        },
        {
            title: 'Artisan Scented Candle',
            description: 'A hand-poured scented candle with natural essential oils.',
            imageUrl: 'https://example.com/candle.jpg',
            price: 20.0,
            artistId,
        },
    ],
});

await prisma.product.updateMany({
  data: { timesViewed: 0 },
});

  console.log('Products created!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });