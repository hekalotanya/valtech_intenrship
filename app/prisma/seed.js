const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const arrayId = [ 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
  142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
  154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
  166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177,
  178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201,
  202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
  214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
  234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251,
  252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
  264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276 ];

async function main() {
  const order = await prisma.image.updateMany({
    where {
      path: '	https://user-images.githubusercontent.com/77466385…5409424-afea2a39-8ffa-41ed-8675-3bbcbc6ec0c3.jpeg'
    }
    data: {
      path: 'https://user-images.githubusercontent.com/77466385/161225743-8110b19a-c867-4c78-b6ab-087f1804bc2b.jpeg',
    },
  });

  console.log(order);
}

main()
  .catch((e) => {
    console.log(123);
    console.error(e);
    process.exit(1);
  })
  .finally(async() => {
    await prisma.$disconnect();
  });