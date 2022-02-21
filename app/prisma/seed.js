const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categoryData = [
  {
    id: 1,
    name: 'Fresh Fruits'
  },
  {
    id: 2,
    name: 'Fresh Vegetables'
  },
  {
    id: 3,
    name: 'Fresh Meats'
  },
  {
    id: 4,
    name: 'Grain Nuts'
  },
  {
    id: 5,
    name: 'Smoothies'
  }
]


const productData = [
  {
    "name": "Asparagus",
    "last_price": 168,
    "price": 145,
    "color": "yellow",
    "size": 3,
    "description": "Sit sunt quis anim fugiat aute adipisicing nostrud non. Fugiat enim anim amet exercitation incididunt culpa sunt nisi. Pariatur deserunt et incididunt ipsum non ad exercitation do.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Kiwi",
    "last_price": 84,
    "price": 119,
    "color": "blue",
    "size": 10,
    "description": "Reprehenderit eu qui id reprehenderit elit veniam quis consequat aliqua. Velit cillum anim duis consequat commodo sint tempor sit. Fugiat ea adipisicing Lorem eu sint ut.",
    "sale": false,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Melon",
    "last_price": 191,
    "price": 27,
    "color": "green",
    "size": 1,
    "description": "Quis elit est ad amet sunt mollit est nostrud aliqua exercitation. Eiusmod amet ut enim nisi velit incididunt fugiat non reprehenderit nostrud cillum. Aliquip voluptate nostrud in occaecat ad laboris pariatur sit mollit in ullamco in in.",
    "sale": false,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Kiwi",
    "last_price": 195,
    "price": 32,
    "color": "orange",
    "size": 2,
    "description": "Et eiusmod sit sunt nostrud nisi magna adipisicing amet duis dolor magna consequat ullamco. Commodo culpa minim laboris pariatur ex occaecat. Pariatur occaecat Lorem adipisicing nisi magna duis adipisicing ad ipsum deserunt.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Radish",
    "last_price": 99,
    "price": 67,
    "color": "green",
    "size": 3,
    "description": "Fugiat aliqua voluptate consequat fugiat Lorem nulla aute laborum. Eiusmod pariatur quis ex duis voluptate irure. Sit excepteur eiusmod quis in officia ullamco tempor excepteur id sint fugiat.",
    "sale": true,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Papaya",
    "last_price": 37,
    "price": 130,
    "color": "yellow",
    "size": 3,
    "description": "Ipsum eu sint pariatur cillum nostrud dolor ex velit tempor. Adipisicing cupidatat aute esse amet nulla magna aute fugiat cupidatat quis elit sit non. Veniam adipisicing Lorem aute commodo voluptate pariatur ad pariatur aute eiusmod.",
    "sale": false,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Banana",
    "last_price": 78,
    "price": 150,
    "color": "red",
    "size": 4,
    "description": "Sunt anim occaecat irure reprehenderit consectetur laborum sit adipisicing non adipisicing aliqua. Esse consectetur sint commodo officia voluptate exercitation nulla ullamco fugiat. Consectetur laboris amet exercitation fugiat veniam est cillum dolor.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Orange",
    "last_price": 69,
    "price": 125,
    "color": "green",
    "size": 6,
    "description": "Dolor aute elit laboris deserunt mollit. Nulla ad do anim do sunt quis occaecat quis qui. Deserunt nostrud nulla eiusmod ex aliquip enim ea eiusmod.",
    "sale": true,
    "best_seller": false,
    "category_id": 2
  },
  {
    "name": "Corn",
    "last_price": 11,
    "price": 121,
    "color": "yellow",
    "size": 8,
    "description": "Ut consectetur nisi Lorem esse irure. In exercitation consequat cupidatat pariatur cupidatat laboris deserunt in quis fugiat consectetur nisi qui sit. Culpa proident et elit labore exercitation sunt elit sunt velit.",
    "sale": false,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Green pepper",
    "last_price": 110,
    "price": 59,
    "color": "orange",
    "size": 7,
    "description": "Cupidatat sint elit commodo non ipsum occaecat nulla proident aute dolore anim. Est labore incididunt anim tempor eu eiusmod est dolor consequat incididunt veniam et sunt. Nisi do incididunt non id sunt labore occaecat aliqua amet elit fugiat.",
    "sale": false,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Mushroom",
    "last_price": 122,
    "price": 140,
    "color": "red",
    "size": 2,
    "description": "Reprehenderit sunt laboris nulla qui in minim non irure ullamco. Cillum occaecat aute minim proident tempor. Labore minim tempor nostrud voluptate in nulla nisi excepteur cupidatat cupidatat officia dolor occaecat.",
    "sale": true,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Watermelon",
    "last_price": 57,
    "price": 99,
    "color": "blue",
    "size": 7,
    "description": "Exercitation aliquip dolore ullamco anim tempor elit ut est occaecat elit officia. Occaecat sunt culpa cillum laborum. Duis Lorem id nulla aute dolor cillum velit nostrud Lorem exercitation tempor.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Orange",
    "last_price": 2,
    "price": 47,
    "color": "green",
    "size": 5,
    "description": "Est esse tempor dolor amet exercitation sit. Occaecat nisi excepteur ipsum laboris exercitation non officia. Duis laborum duis et do.",
    "sale": true,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Lemon",
    "last_price": 108,
    "price": 55,
    "color": "blue",
    "size": 3,
    "description": "Ut incididunt ut veniam qui. Et quis elit nulla eiusmod elit excepteur exercitation ex commodo proident veniam commodo nulla aute. Proident anim reprehenderit anim duis anim do aliquip elit anim in.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Red pepper",
    "last_price": 20,
    "price": 159,
    "color": "red",
    "size": 3,
    "description": "Tempor mollit elit ad ea excepteur. Magna commodo et amet occaecat reprehenderit esse occaecat magna sunt officia sit mollit dolor officia. Nulla laborum proident et amet commodo velit quis est esse est aliqua pariatur.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Beetroot",
    "last_price": 151,
    "price": 55,
    "color": "red",
    "size": 5,
    "description": "Aliquip ullamco velit labore dolore pariatur et pariatur. Anim cillum qui do qui eiusmod. Qui ex sit ex excepteur.",
    "sale": true,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Peach",
    "last_price": 38,
    "price": 23,
    "color": "yellow",
    "size": 5,
    "description": "Pariatur ipsum ipsum do laborum ut sint in velit nulla aliqua. Dolore proident amet laboris duis fugiat culpa sunt qui. Officia dolor pariatur ad in aute consectetur non labore cupidatat voluptate laborum tempor.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Corn",
    "last_price": 123,
    "price": 98,
    "color": "green",
    "size": 4,
    "description": "Elit qui veniam quis nisi. Nulla id labore velit commodo ullamco non quis nostrud occaecat mollit. Elit cupidatat excepteur aliquip voluptate id sunt aliqua ullamco cillum.",
    "sale": false,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Spinach",
    "last_price": 16,
    "price": 44,
    "color": "red",
    "size": 5,
    "description": "Incididunt consequat aliqua laborum eu eiusmod ex commodo magna amet deserunt culpa duis cillum. Sit aliqua Lorem anim enim aliquip Lorem nostrud irure. Incididunt velit excepteur velit fugiat Lorem irure ipsum magna minim culpa duis.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Kiwi",
    "last_price": 74,
    "price": 101,
    "color": "red",
    "size": 7,
    "description": "Ipsum nostrud consectetur laboris aliquip elit enim aliqua non officia. Exercitation deserunt nulla culpa est officia exercitation. Et nulla aliquip mollit do do incididunt qui mollit mollit laborum minim ipsum fugiat tempor.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Mushroom",
    "last_price": 16,
    "price": 67,
    "color": "blue",
    "size": 6,
    "description": "Ad pariatur veniam velit ex et exercitation non eiusmod deserunt. Anim est amet incididunt sint irure exercitation laborum. Nulla non id nostrud excepteur irure enim aliquip laborum.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Pumpkin",
    "last_price": 26,
    "price": 130,
    "color": "green",
    "size": 5,
    "description": "Exercitation ad velit enim amet. Magna aute est in amet elit consequat adipisicing aute pariatur cupidatat nostrud. In reprehenderit est labore excepteur ullamco.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Spinach",
    "last_price": 111,
    "price": 82,
    "color": "blue",
    "size": 3,
    "description": "Nisi duis sint quis dolore magna laborum aliquip proident labore aliqua cupidatat. Do cillum sunt eiusmod reprehenderit sint et ut magna amet culpa non. Incididunt mollit quis anim aliqua sint est proident tempor id irure cillum consequat.",
    "sale": false,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Pear",
    "last_price": 25,
    "price": 130,
    "color": "yellow",
    "size": 1,
    "description": "Voluptate et tempor adipisicing laborum et. Exercitation laborum ipsum eiusmod in amet sint aliqua aliqua et tempor aliqua aliquip. Ut sit tempor est officia commodo laboris irure ut elit nisi id id.",
    "sale": true,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Orange",
    "last_price": 97,
    "price": 26,
    "color": "red",
    "size": 8,
    "description": "Excepteur irure ea id commodo ut. Aliqua in labore sit occaecat est sit voluptate ea minim. Cillum exercitation voluptate dolor anim mollit nostrud.",
    "sale": false,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Red chillies",
    "last_price": 29,
    "price": 114,
    "color": "green",
    "size": 1,
    "description": "Dolore do sunt occaecat exercitation aliquip elit qui cupidatat et dolor eiusmod. Cupidatat cillum aute laborum quis. Duis est qui laborum quis laborum officia commodo dolor ullamco cupidatat ea qui elit anim.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Jackfruit",
    "last_price": 29,
    "price": 26,
    "color": "orange",
    "size": 3,
    "description": "Elit elit nostrud cupidatat laboris elit do ullamco cupidatat eu. Velit tempor in laborum ipsum proident quis dolore minim elit. Ullamco est culpa deserunt et et est anim voluptate fugiat laboris.",
    "sale": false,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Grape",
    "last_price": 29,
    "price": 186,
    "color": "red",
    "size": 10,
    "description": "Adipisicing consectetur duis Lorem aute enim. Ipsum nisi consequat aliquip deserunt ut fugiat est qui exercitation non cillum consequat incididunt deserunt. Reprehenderit id exercitation aliquip et fugiat et fugiat et.",
    "sale": true,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Bean",
    "last_price": 54,
    "price": 118,
    "color": "blue",
    "size": 9,
    "description": "Dolor voluptate occaecat consequat Lorem sint magna veniam sint incididunt eiusmod. Veniam sint duis reprehenderit incididunt consequat cupidatat voluptate Lorem do ex occaecat aute. Dolore consequat aliqua consequat aliquip Lorem commodo cupidatat.",
    "sale": true,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Lime",
    "last_price": 161,
    "price": 89,
    "color": "blue",
    "size": 2,
    "description": "Nostrud consequat ipsum nisi laborum eu in et aute. Deserunt pariatur deserunt et magna voluptate reprehenderit veniam duis et cillum. In amet ea ut sunt amet.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Pomegranate",
    "last_price": 62,
    "price": 27,
    "color": "orange",
    "size": 8,
    "description": "Aliquip fugiat cupidatat ex eu velit laboris voluptate reprehenderna enim eiusmod do sint magna sit.",
    "sale": true,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Bean",
    "last_price": 110,
    "price": 109,
    "color": "orange",
    "size": 8,
    "description": "Ullamco velit elit aliquip qui aute occaecat amet anim dolore veniam aute cupidatat sint in. Quis amet minim sit nostrud occaecat velit ea labore consectetur et. Pariatur incididunt quis dolore cillum ut occaecat.",
    "sale": true,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Cherry",
    "last_price": 14,
    "price": 73,
    "color": "orange",
    "size": 9,
    "description": "Esse officia mollit officia officia in eu pariatur minim magna veniam. Nulla dolore minim laboris et cillum nostrud aliquip irure minim. Excepteur ex pariatur cupidatat quis aute eiusmod irure dolor cillum exercitation.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Pear",
    "last_price": 132,
    "price": 178,
    "color": "red",
    "size": 1,
    "description": "Aute voluptate occaecat in sit Lorem est tempor pariatur anim culpa deserunt officia. Nulla voluptate dolore sunt ad eiusmod velit. Exercitation laboris consectetur ex ea sunt sunt et exercitation sunt eu ad dolor occaecat.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Courgette",
    "last_price": 5,
    "price": 197,
    "color": "red",
    "size": 5,
    "description": "Cupidatat adipisicing officia culpa incididunt enim laborum ea mollit ad cupidatat. Qui labore commodo ea commodo magna ullamco cillum esse consectetur commodo quis ipsum. Mollit quis amet cupidaerit aliquip eiusmod laborum.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Plum",
    "last_price": 3,
    "price": 162,
    "color": "green",
    "size": 8,
    "description": "Non consequat aliqua qui ex ad. Pariatur duis consectetur eu ea nostrud ad. Dolore et incididunt non reprehenderit aliqua quis aliqua sit velit qui ipsum eiusmod occaecat laboris.",
    "sale": true,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Red pepper",
    "last_price": 62,
    "price": 105,
    "color": "orange",
    "size": 9,
    "description": "Cillum elit occaecat ullamco consectetur adipisicing occaecat aliqua. Ex duis excepteur laborum dolore officia anim culpa sint minim qui. Cillum consequat reprehenderit ullamco ex culpa aute enim deserunt qui.",
    "sale": false,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Lime",
    "last_price": 124,
    "price": 51,
    "color": "yellow",
    "size": 10,
    "description": "Commodo eu proident reprehenderit duis veniam pariatur in fugiat labore. Veniam consectetur fugiat qui dolor. Ut mollit occaecat sit officia exercitation anim occaecat incididunt laboris.",
    "sale": true,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Nectarine",
    "last_price": 82,
    "price": 118,
    "color": "green",
    "size": 7,
    "description": "Id fugiat deserunt proident aute amet labore ea cillum sint ut in. Ad sit fugiat id officia qui consequat veniam fugiat ad ullamco. Cillum veniam sit deserunt exercitation excepteur laborum incididunt culpa officia.",
    "sale": true,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Potato",
    "last_price": 83,
    "price": 189,
    "color": "blue",
    "size": 4,
    "description": "Cupidatat in consectetur non aliquip consectetur fugiat a nostrud exercitation culpa esse aliquip anim.",
    "sale": false,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Jackfruit",
    "last_price": 11,
    "price": 84,
    "color": "orange",
    "size": 3,
    "description": "Veniam labore officia do ipsum. Nostrud ex aliquip aliquip irure exercitation nostrud excepteur aliquip. Ullamco ex occaecat ut Lorem culpa non magna aliqua incididunt est incididunt exercitation.",
    "sale": false,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Asparagus",
    "last_price": 164,
    "price": 36,
    "color": "yellow",
    "size": 9,
    "description": "Id officia nostrud eu ullamco nisi. Nulla tempor ullamco cillum deserunt et tempor. Aute cupidatat aliqua minim laborum.",
    "sale": false,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Papaya",
    "last_price": 18,
    "price": 40,
    "color": "red",
    "size": 10,
    "description": "Et id eiusmod excepteur incididunt nulla ex consequat incididunt ad in exercitation mollit. Duis eu aliqua id minim laboris sunt. Laborum commodo do enim pariatur sint cupidatat duis et ut amet minim.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Coconut",
    "last_price": 8,
    "price": 48,
    "color": "green",
    "size": 9,
    "description": "Lorem est irure ut ex labore elit laborum consectetur aliquip tempor exercitation enim in do. Aliquip incididunt esse reprehenderit sunt fugiat. Est occaecat elit elit velit ad aliquip.",
    "sale": false,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Melon",
    "last_price": 78,
    "price": 44,
    "color": "red",
    "size": 1,
    "description": "Lorem consequat velit amet deserunt ullamco officia ex sunt non. Culpa sit reprehenderit irure est sint voluptate laborum eiusmod. Laboris sunt aliqua fugiat occaecat cupidatat officia duis dolore enim occaecat sunt nisi amet.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Melon",
    "last_price": 36,
    "price": 188,
    "color": "green",
    "size": 7,
    "description": "Sit laboris eu labore dolor ea anim ipsum adipisicing eiusmod pariatur. Consequat cupidatat cillum mollit velit non Lorem exercitation. Irure quis id veniam labore enim laborum veniam tempor ullamco.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Jackfruit",
    "last_price": 5,
    "price": 96,
    "color": "orange",
    "size": 2,
    "description": "Veniam sit qui ea culpa consectetur nostrud eiusmod proident est velit anim sit dolore. Do cupidatat labore ad ut labore. Lorem sit do ad sit tempor laborum sit veniam.",
    "sale": true,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Papaya",
    "last_price": 132,
    "price": 107,
    "color": "yellow",
    "size": 2,
    "description": "In sint eu ad laboris aliquip ullamco ad excepteur velit. Dolore minim cupidatat officia anim est laborum incididunt velit quis irure laborum. Veniam mollit culpa ad adipisicing exercitation excepteur consectetur.",
    "sale": true,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Banana",
    "last_price": 103,
    "price": 53,
    "color": "orange",
    "size": 9,
    "description": "Et magna deserunt do adipisicing exercitation pariatur incididunt consequat in elit nulla aliqua. Magna sit sunt elit in ullamco amet aute in deserunt ad nisi. Mollit cillum enim consequat culpa et cillum qui in esse sit id.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Kiwi",
    "last_price": 132,
    "price": 88,
    "color": "orange",
    "size": 5,
    "description": "Fugiat pariatur non consectetur eu veniam. Proident magna anim velit veniam dolore. Incididunt tempor aliquip laborum ut enim irure.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Lemon",
    "last_price": 162,
    "price": 193,
    "color": "yellow",
    "size": 9,
    "description": "Proident qui veniam voluptate eiusmod reprehenderit mollit quis aliquip magna ullamco. Magna est officia ullamco pariatur voluptate nulla amet proident ut. Excepteur excepteur dolore deserunt eiusmod cillum quis et ut exercitation.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Cucumber",
    "last_price": 128,
    "price": 163,
    "color": "green",
    "size": 10,
    "description": "Cupidatat ullamco nisi velit do sint enim ad eiusmod in veniam non nostrud adipisicing eiusmod. Sit duis pariatur duis non non culpa sint ex mollit quis ullamco fugiat laborum. Laboris qui irure occaecat ad consectetur in labore anim cillum.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Brussels sprout",
    "last_price": 113,
    "price": 114,
    "color": "green",
    "size": 6,
    "description": "Aliqua esse esse nostrud dolore sint id. Ut irure adipisicing ex culpa aute anim aliquip. Ipsum aliquip qui cupidatat eiusmod ad amet ad Lorem.",
    "sale": false,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Beetroot",
    "last_price": 34,
    "price": 47,
    "color": "red",
    "size": 8,
    "description": "Esse commodo ipsum in sit esse ex et labore ipsum eiusmod deserunt voluptate. Commodo ullamco fugia",
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Watermelon",
    "last_price": 157,
    "price": 114,
    "color": "yellow",
    "size": 9,
    "description": "Duis nulla sint minim sint Lorem commodo occaecat ad eu labore proident. Veniam reprehenderit labore consectetur sint ipsum labore velit. Reprehenderit eiusmod ex do sint fugiat ad aliqua duis enim nulla reprehenderit nostrud qui.",
    "sale": true,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Carrot",
    "last_price": 140,
    "price": 35,
    "color": "orange",
    "size": 7,
    "description": "Consequat voluptate Lorem voluptate ipsum enim officia ad. Ex fugiat dolore ea mollit consectetur dolor laboris nisi quis incididunt ex. Enim ut eu dolor excepteur fugiat culpa labore exercitation ullamco ipsum aute.",
    "sale": true,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Pear",
    "last_price": 44,
    "price": 5,
    "color": "yellow",
    "size": 2,
    "description": "Elit esse sit et incididunt. Minim ipsum aliquip consectetur ex officia esse anim. Magna Lorem eu ipsum ipsum.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Asparagus",
    "last_price": 158,
    "price": 46,
    "color": "blue",
    "size": 5,
    "description": "Minim aliqua nisi non qui tempor deserunt enim tempor exercitation culpa consectetur exercitation. Nostrud sit occaecat anim minim veniam non exercitation. Do ex eiusmod eu pariatur.",
    "sale": false,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Carambola",
    "last_price": 66,
    "price": 38,
    "color": "green",
    "size": 8,
    "description": "Ullamco ea tempor pariatur nulla commodo ex. Incididunt reprehenderit irure officia sit sint eiusmod duis dolor cillum qui amet esse. Commodo aute laborum et dolore.",
    "sale": false,
    "best_seller": false,
    "category_id": 2
  },
  {
    "name": "Corn",
    "last_price": 150,
    "price": 150,
    "color": "yellow",
    "size": 3,
    "description": "Incididunt commodo cupidatat reprehenderit quis magna sint do eu cupidatat dolor adipisicing ea et. Enim tempor et consequat culpa laborum duis nisi. Consequat eiusmod do id reprehenderit qui incididunt quis excepteur duis est ut ipsum ut.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Red chillies",
    "last_price": 162,
    "price": 86,
    "color": "blue",
    "size": 8,
    "description": "Non eu pariatur anim enim ut aliqua dolore magna do labore tempor occaecat voluptate nulla. Excepteur cillum sit laborum occaecat sit do consequat. Cillum exercitation anim culpa veniam magna.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Grapefruit",
    "last_price": 33,
    "price": 156,
    "color": "orange",
    "size": 5,
    "description": "Laborum eiusmod amet eiusmod eu ea nostrud ipsum sunt do ea anim incididunt cupidatat. Et quis velit duis ex id Lorem labore sit velit do aliqua proident ut excepteur. Ut culpa qui nostrud dolor deserunt ex velit Lorem dolor pariatur ex cupidatat ullamco elit.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Carrot",
    "last_price": 167,
    "price": 89,
    "color": "blue",
    "size": 4,
    "description": "Amet dolor laborum laboris aliquip mollit veniam fugiat dolor tempor consectetur in tempor id. Sit consequat esse anim reprehenderit. Ex sint ad officia cillum incididunt proident.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Strawberry",
    "last_price": 67,
    "price": 93,
    "color": "yellow",
    "size": 5,
    "description": "Ut laborum excepteur officia minim eiusmod aliqua exercitation et reprehenderit fugiat sunt ea ad mollit. Ipsum anim nisi qui laborum. Duis dolore do exercitation et sint nulla.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Watermelon",
    "last_price": 47,
    "price": 69,
    "color": "red",
    "size": 3,
    "description": "Est do occaecat sit duis excepteur in incididunt irure do. Ex amet Lorem nulla labore excepteur aliqua elit quis proident sunt irure. Amet duis exercitation dolor velit id Lorem fugiat fugiat.",
    "sale": true,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Pear",
    "last_price": 183,
    "price": 46,
    "color": "orange",
    "size": 10,
    "description": "Magna labore elit enim voluptate do labore in exercitation irure. Laborum veniam exercitation ut tempor tempor reprehenderit reprehenderit id ipsum minim laboris et. Ex occaecat culpa consequat laboris eiusmod nosunt non nulla laborum irure cillum.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Grapefruit",
    "last_price": 63,
    "price": 53,
    "color": "red",
    "size": 2,
    "description": "Nostrud in dolore exercitation nulla ex exercitation sint culpa. Veniam pariatur laboris fugiat esse anim commodo. Enim aliquip nisi consectetur sint Lorem amet non.",
    "sale": false,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Banana",
    "last_price": 125,
    "price": 99,
    "color": "orange",
    "size": 4,
    "description": "Laboris aliqua et cupidatat Lorem anim anim tempor occaecat dolor aute qui excepteur sunt ut. Dolore nulla ad in exercitation. Ea ut Lorem eiusmod proident ex aliqua excepteur sit pariatur adipisicing consequat amet veniam commodo.",
    "sale": false,
    "best_seller": false,
    "category_id": 2
  },
  {
    "name": "Avocado",
    "last_price": 46,
    "price": 69,
    "color": "orange",
    "size": 8,
    "description": "In proident duis proident voluptate aliqua nulla tempor minim. Sunt eiusmod ex velit irure commodo labore est eiusmod incididunt. Do non anim id et veniam.",
    "sale": false,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Grapefruit",
    "last_price": 181,
    "price": 200,
    "color": "red",
    "size": 4,
    "description": "Aute occaecat cupidatat voluptate proident consequat irure aute irure nulla commodo excepteur cillum id. Sint ipsum cillum amet laborum proident. Deserunt nulla Lorem consectetur officia fugiat magna est culpa cupidatat consequat sunt id pariatur.",
    "sale": true,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Green pepper",
    "last_price": 13,
    "price": 134,
    "color": "blue",
    "size": 4,
    "description": "Ad nostrud est et cillum commodo eu reprehenderit culpa dolor dolor cillum consectetur. Labore veniam adipisicing eiusmod dolor eu ut officia aute ut dolore in. Eu excepteur excepteur elit labore labore irure.",
    "sale": true,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Pineapple",
    "last_price": 37,
    "price": 59,
    "color": "yellow",
    "size": 8,
    "description": "Nulla occaecat ipsum labore voluptate non minim exercitation consequat. Ut duis dolore id aute ipsum eu qui anim voluptate. Adipisicing deserunt est irure consectetur commodo ex.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Pear",
    "last_price": 123,
    "price": 188,
    "color": "orange",
    "size": 3,
    "description": "Culpa consequat incididunt incididunt tempor eu aute anim deserunt labore aute. Pariatur occaecat ut reprehenderit cillum do labore sint sint nostrud id. Dolore in incididunt quis cupidatat nulla tempor ut adipisicing ipsum amet laboris cupidatat Lorem.",
    "sale": false,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Red pepper",
    "last_price": 160,
    "price": 61,
    "color": "green",
    "size": 7,
    "description": "Labore cillum cupidatat culpa nulla laboris Lorem commodo reprehenderit eu quis commodo dolor in dolore. Duis consectetur eu duis anim eiusmod commodo. Officia ullamco cillum laboris eu qui dolore enim aliquip incididunt.",
    "sale": false,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Carambola",
    "last_price": 23,
    "price": 9,
    "color": "orange",
    "size": 8,
    "description": "Veniam quis velit non enim ad ullamco Lorem qui labore. Id non est ad culpa aliquip exercitation pariatur velit dolore pariatur do minim do. Proident consequat ea nostrud proident nostrud aliquip non dolore incididunt et anim.",
    "sale": true,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Pomegranate",
    "last_price": 28,
    "price": 116,
    "color": "blue",
    "size": 5,
    "description": "Voluptate ad cillum enim commodo non. Incididunt aute deserunt fugiat eiusmod velit. Aliquip id non officia anim consectetur pariatur labore excepteur labore cupidatat ullamco anim amet.",
    "sale": false,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Papaya",
    "last_price": 78,
    "price": 105,
    "color": "yellow",
    "size": 8,
    "description": "Ullamco adipisicing quis voluptate exercitation qui irure et adipisicing duis. Laboris laborum cupidatat laboris reprehenderit pariatur nostrud. Officia labore ea ullamco in cupidatat.",
    "sale": false,
    "best_seller": true,
    "category_id": 3
  },
  {
    "name": "Pineapple",
    "last_price": 16,
    "price": 14,
    "color": "yellow",
    "size": 7,
    "description": "Commodo dolor excepteur esse sit Lorem ex. Sint id nostrud enim incididunt culpa. Sunt sint aliquip duis irure labore Lorem irure ad culpa culpa deserunt.",
    "sale": true,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Coconut",
    "last_price": 104,
    "price": 46,
    "color": "yellow",
    "size": 10,
    "description": "Tempor Lorem exercitation esse ad. Reprehenderit ex fugiat qui quis cupidatat Lorem labore aliquip. Esse officia sit enim proident ipsum duis tempor eiusmod officia deserunt.",
    "sale": true,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Cucumber",
    "last_price": 175,
    "price": 61,
    "color": "yellow",
    "size": 2,
    "description": "Minim nulla sit id culpa ea laborum minim. Non irure sit tempor deserunt elit mollit velit nostrud irure et voluptate. Labore ea aliquip sint voluptate duis pariatur dolor cillum sit pariatur enim.",
    "sale": false,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Corn",
    "last_price": 16,
    "price": 90,
    "color": "red",
    "size": 1,
    "description": "Ut non aliquip enim nostrud do esse sunt pariatur amet laboris ad velit ipsum eiusmod. Adipisicing quis sunt nisi mollit velit. Enim sint ullamco non nulla occaecat est pariatur adipisicing amet.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Cherry",
    "last_price": 30,
    "price": 127,
    "color": "orange",
    "size": 9,
    "description": "Fugiat consequat nisi amet amet nostrud quis esse irure eu velit. Proident sit eu sit tempor elit elit consequat cupidatat ullamco laboris irure eu. Incididunt exercitation in nostrud id sit commodo nostrud irure do excepteur proident.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Brussels sprout",
    "last_price": 121,
    "price": 123,
    "color": "yellow",
    "size": 7,
    "description": "Sit qui qui et incididunt eu nostrud amet culpa esse proident. Anim qui cillum quis cupidatat mollit dolore ad fugiat excepteur esse mollit. Culpa et sit voluptate id.",
    "sale": true,
    "best_seller": false,
    "category_id": 3
  },
  {
    "name": "Swede",
    "last_price": 50,
    "price": 131,
    "color": "green",
    "size": 7,
    "description": "Velit consectetur mollit sint velit consequat ipsum fugiat. Labore ad nostrud Lorem anim excepteur do. Dolore mollit amet cupidatat tempor culpa commodo veniam Lorem reprehenderit mollit tempor velit consectetur irure.",
    "sale": false,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Corn",
    "last_price": 28,
    "price": 80,
    "color": "blue",
    "size": 6,
    "description": "Ex incididunt eu non veniam ad mollit amet minim pariatur proident. Ullamco deserunt adipisicing exercitation cillum. Incididunt do enim nisi aute elit aliqua velit culpa reprehenderit.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Red pepper",
    "last_price": 157,
    "price": 170,
    "color": "red",
    "size": 5,
    "description": "Incididunt fugiat dolor aliquip occaecat do veniam incididunt magna anim nisi. Commodo cillum adipisicing eu id nulla. Ut adipisicing qui ullamco esse.",
    "sale": false,
    "best_seller": false,
    "category_id": 4
  },
  {
    "name": "Lemon",
    "last_price": 183,
    "price": 23,
    "color": "orange",
    "size": 7,
    "description": "Dolor aliquip adipisicing cupidatat voluptate dolore. Amet veniam laborum exercitation est. Quis aute deserunt dolor est est occaecat.",
    "sale": false,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Avocado",
    "last_price": 171,
    "price": 27,
    "color": "blue",
    "size": 8,
    "description": "Cupidatat pariatur anim elit quis elit proident. Eiusmod quis dolor est minim eu cillum aute deserunt ut. In occaecat in exercitation consequat in occaecat id aute aute cillum laborum mollit qui labore.",
    "sale": false,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Radish",
    "last_price": 113,
    "price": 40,
    "color": "blue",
    "size": 2,
    "description": "Magna duis magna eiusmod pariatur cupidatat elit tempor incididunt sit elit. Anim tempor ex eu in incididunt cupidatat aute amet amet. Occaecat adipisicing consequat ut ad deserunt.",
    "sale": true,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Celery",
    "last_price": 145,
    "price": 192,
    "color": "blue",
    "size": 6,
    "description": "Magna minim nulla anim labore sint fugiat laboris esse ad sint. Tempor mollit amet sit aliquip excepteur ad do cillum enim occaecat. Elit esse irure officia esse Lorem eiusmod ipsum aute consequat.",
    "sale": false,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Papaya",
    "last_price": 45,
    "price": 57,
    "color": "blue",
    "size": 7,
    "description": "Ullamco proident laborum aute ullamco sunt nulla commodo dolor eu aliquip nisi pariatur et in. Ipsum consequat qui quis cillum labore irure exercitation. Fugiat voluptate tempor nulla nostrud nulla eu in deserunt ad.",
    "sale": false,
    "best_seller": false,
    "category_id": 5
  },
  {
    "name": "Apricot",
    "last_price": 148,
    "price": 120,
    "color": "red",
    "size": 8,
    "description": "Eiusmod elit aliquip reprehenderit dolore do cillum pariatur occaecat nulla anim. Enim labore mollit sint culpa ut. Ullamco labore laboris dolor magna adipisicing incididunt ullamco.",
    "sale": false,
    "best_seller": false,
    "category_id": 2
  },
  {
    "name": "Sweet potato",
    "last_price": 89,
    "price": 79,
    "color": "green",
    "size": 6,
    "description": "Laborum ullamco minim fugiat quis do non. Non cillum occaecat dolore in pariatur consequat adipisicing sint consectetur laboris excepteur laboris amet consequat. Esse irure ullamco non dolore irure laborum nisi ad laboris fugiat commodo non.",
    "sale": true,
    "best_seller": true,
    "category_id": 5
  },
  {
    "name": "Pomegranate",
    "last_price": 167,
    "price": 13,
    "color": "orange",
    "size": 1,
    "description": "Velit tempor amet aliquip officia esse. Ad sit aliquip aliquip ea duis aute. Sint sint aliquip ad deserunt ex qui sit veniam.",
    "sale": false,
    "best_seller": false,
    "category_id": 1
  },
  {
    "name": "Banana",
    "last_price": 71,
    "price": 6,
    "color": "blue",
    "size": 3,
    "description": "Consequat Lorem sunt dolore qui cupidatat ullamco voluptate sint deserunt elit eu. Ullamco et ea ut pariatur anim ea nulla aute non reprehenderit proident. Deserunt aliquip commodo duis do quis officia do velit cupidatat.",
    "sale": false,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Kiwi",
    "last_price": 103,
    "price": 42,
    "color": "red",
    "size": 4,
    "description": "Nostrud commodo culpa do sint anim ipsum elit minim est. Incididunt culpa voluptate exercitation fugiat ullamco elit non anim laborum labore anim sunt cupidatat ex. Ut ullamco in deserunt ut ipsum do culpa commodo eiusmod deserunt consectetur excepteur mollit eu.",
    "sale": true,
    "best_seller": true,
    "category_id": 4
  },
  {
    "name": "Watermelon",
    "last_price": 128,
    "price": 84,
    "color": "orange",
    "size": 9,
    "description": "Cillum occaecat ex cillum id do irure nulla voluptate. Nulla commodo sit elit proident cupidatat adipisicing sunt non laborum. Do tempor culpa laborum qui est in dolore est.",
    "sale": false,
    "best_seller": true,
    "category_id": 2
  },
  {
    "name": "Mandarin",
    "last_price": 199,
    "price": 53,
    "color": "red",
    "size": 4,
    "description": "Ea ipsum nostrud nulla exercitation reprehenderit duis ad consequat cillum fugiat. Do laboris commodo adipisicing labore nulla. Tempor ex esse dolor elit.",
    "sale": true,
    "best_seller": true,
    "category_id": 1
  },
  {
    "name": "Pumpkin",
    "last_price": 51,
    "price": 160,
    "color": "green",
    "size": 4,
    "description": "Do veniam velit quis voluptate consequat amet elit quis qui laboris ea et ullamco. Exercitation nostrud incididunt elit dolor minim officia enim minim. Nostrud non exercitation adipisicing enim nulla nostrud.",
    "sale": false,
    "best_seller": false,
    "category_id": 2
  },
  {
    "name": "Sweet potato",
    "last_price": 104,
    "price": 186,
    "color": "red",
    "size": 10,
    "description": "Dolor enim in ut tempor non dolor nostrud. Quis cupidatat excepteur fugiat exercitation veniam. Esse amet laborum id sit exercitation minim ipsum veniam eiusmod non.",
    "sale": true,
    "best_seller": true,
    "category_id": 5
  }
]

const images = [
  {
    "path": "https://www.agroinvestor.ru/upload/iblock/121/1216f2d145cc1cd86e2dc2ae3fe4c1ee.jpg",
    "product_id": 0
  },
  {
    "path": "https://cdnn21.img.ria.ru/images/07e5/02/10/1597717744_0:74:3072:1802_1920x0_80_0_0_6741380118b142a3de06d8f94be36315.jpg",
    "product_id": 1
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 2
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 3
  },
  {
    "path": "http://www.menslife.com/upload/iblock/69c/top_20_maloizvestnykh_no_ochen_interesnykh_ekzoticheskikh_fruktov.jpg",
    "product_id": 4
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 5
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 6
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 7
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/media/img/6/83/755650190202836.jpg",
    "product_id": 8
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 9
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 10
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 11
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 12
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 13
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 14
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 15
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 16
  },
  {
    "path": "http://www.menslife.com/upload/iblock/69c/top_20_maloizvestnykh_no_ochen_interesnykh_ekzoticheskikh_fruktov.jpg",
    "product_id": 17
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 18
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 19
  },
  {
    "path": "https://www.agroinvestor.ru/upload/iblock/121/1216f2d145cc1cd86e2dc2ae3fe4c1ee.jpg",
    "product_id": 20
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 21
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/media/img/6/83/755650190202836.jpg",
    "product_id": 22
  },
  {
    "path": "https://cyprusbutterfly.com.cy/assets/cache_image/images/news/ostorozhno-yadovitaya-klubnika-na-ferme-v-zigi_0x0_977.jpg",
    "product_id": 23
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 24
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 25
  },
  {
    "path": "https://inbusiness.kz/ru/images/original/37/images/d8tOhj5F.jpg",
    "product_id": 26
  },
  {
    "path": "https://kubnews.ru/upload/iblock/272/272d467b0cee22d8513d9f7d6d1c8bff.jpg",
    "product_id": 27
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 28
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 29
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 30
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/kak-vyirastit-gretskiy-oreh-01-1.jpg",
    "product_id": 31
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/kak-vyirastit-gretskiy-oreh-01-1.jpg",
    "product_id": 32
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 33
  },
  {
    "path": "https://www.agroinvestor.ru/upload/iblock/121/1216f2d145cc1cd86e2dc2ae3fe4c1ee.jpg",
    "product_id": 34
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 35
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/media/img/6/83/755650190202836.jpg",
    "product_id": 36
  },
  {
    "path": "http://www.menslife.com/upload/iblock/bd8/kakie_yagody_samye_poleznye.jpg",
    "product_id": 37
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 38
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 39
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/6/22/756284966358226.jpg",
    "product_id": 40
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 41
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 42
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/6/22/756284966358226.jpg",
    "product_id": 43
  },
  {
    "path": "https://roscontrol.com/files/original_images/articles/6f/17/6f178eda01bc71255420.jpg",
    "product_id": 44
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 45
  },
  {
    "path": "https://cdnn21.img.ria.ru/images/07e5/02/10/1597717744_0:74:3072:1802_1920x0_80_0_0_6741380118b142a3de06d8f94be36315.jpg",
    "product_id": 46
  },
  {
    "path": "https://roscontrol.com/files/original_images/articles/6f/17/6f178eda01bc71255420.jpg",
    "product_id": 47
  },
  {
    "path": "https://cdnn21.img.ria.ru/images/07e5/02/10/1597717744_0:74:3072:1802_1920x0_80_0_0_6741380118b142a3de06d8f94be36315.jpg",
    "product_id": 48
  },
  {
    "path": "https://inbusiness.kz/ru/images/original/37/images/d8tOhj5F.jpg",
    "product_id": 49
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 50
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 51
  },
  {
    "path": "https://goodies.com.ua/wp-content/uploads/2020/04/2273_%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-e1587321530444-1200x720.jpg",
    "product_id": 52
  },
  {
    "path": "http://www.menslife.com/upload/iblock/69c/top_20_maloizvestnykh_no_ochen_interesnykh_ekzoticheskikh_fruktov.jpg",
    "product_id": 53
  },
  {
    "path": "https://roscontrol.com/files/original_images/articles/6f/17/6f178eda01bc71255420.jpg",
    "product_id": 54
  },
  {
    "path": "http://www.menslife.com/upload/iblock/69c/top_20_maloizvestnykh_no_ochen_interesnykh_ekzoticheskikh_fruktov.jpg",
    "product_id": 55
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 56
  },
  {
    "path": "http://www.menslife.com/upload/iblock/bd8/kakie_yagody_samye_poleznye.jpg",
    "product_id": 57
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 58
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 59
  },
  {
    "path": "http://www.menslife.com/upload/iblock/bd8/kakie_yagody_samye_poleznye.jpg",
    "product_id": 60
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 61
  },
  {
    "path": "http://www.menslife.com/upload/iblock/bd8/kakie_yagody_samye_poleznye.jpg",
    "product_id": 62
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 63
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 64
  },
  {
    "path": "https://inbusiness.kz/ru/images/original/37/images/d8tOhj5F.jpg",
    "product_id": 65
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/kak-vyirastit-gretskiy-oreh-01-1.jpg",
    "product_id": 66
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 67
  },
  {
    "path": "https://cdnn21.img.ria.ru/images/07e5/02/10/1597717744_0:74:3072:1802_1920x0_80_0_0_6741380118b142a3de06d8f94be36315.jpg",
    "product_id": 68
  },
  {
    "path": "https://www.agroinvestor.ru/upload/iblock/121/1216f2d145cc1cd86e2dc2ae3fe4c1ee.jpg",
    "product_id": 69
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 70
  },
  {
    "path": "https://inbusiness.kz/ru/images/original/37/images/d8tOhj5F.jpg",
    "product_id": 71
  },
  {
    "path": "https://kubnews.ru/upload/iblock/272/272d467b0cee22d8513d9f7d6d1c8bff.jpg",
    "product_id": 72
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 73
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 74
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/9-kultur-byistrogo-10.jpg",
    "product_id": 75
  },
  {
    "path": "https://cyprusbutterfly.com.cy/assets/cache_image/images/news/ostorozhno-yadovitaya-klubnika-na-ferme-v-zigi_0x0_977.jpg",
    "product_id": 76
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 77
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 78
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 79
  },
  {
    "path": "https://inbusiness.kz/ru/images/original/37/images/d8tOhj5F.jpg",
    "product_id": 80
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 81
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/6/22/756284966358226.jpg",
    "product_id": 82
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/kak-vyirastit-gretskiy-oreh-01-1.jpg",
    "product_id": 83
  },
  {
    "path": "http://www.menslife.com/upload/iblock/bd8/kakie_yagody_samye_poleznye.jpg",
    "product_id": 84
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 85
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 86
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 87
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 88
  },
  {
    "path": "https://static.1000.menu/img/content-v2/cb/1d/58130/fruktovyi-smuzi-v-blendere_1629916238_11_max.jpg",
    "product_id": 89
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 90
  },
  {
    "path": "http://www.menslife.com/upload/iblock/309/chto_takoe_smuzi_i_kak_poluchit_ot_nego_maksimalnuyu_polzu.jpg",
    "product_id": 91
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/media/img/6/83/755650190202836.jpg",
    "product_id": 92
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 93
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/media/img/6/83/755650190202836.jpg",
    "product_id": 94
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/ampresize/media/img/6/22/756284966358226.jpg",
    "product_id": 95
  },
  {
    "path": "https://pics.botanichka.ru/wp-content/uploads/2019/01/kak-vyirastit-gretskiy-oreh-01-1.jpg",
    "product_id": 96
  },
  {
    "path": "http://www.menslife.com/upload/iblock/69c/top_20_maloizvestnykh_no_ochen_interesnykh_ekzoticheskikh_fruktov.jpg",
    "product_id": 97
  },
  {
    "path": "https://roscontrol.com/files/original_images/articles/6f/17/6f178eda01bc71255420.jpg",
    "product_id": 98
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 99
  },
  {
    "path": "http://www.menslife.com/upload/iblock/309/chto_takoe_smuzi_i_kak_poluchit_ot_nego_maksimalnuyu_polzu.jpg",
    "product_id": 100
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 101
  },
  {
    "path": "https://s1.eda.ru/StaticContent/Photos/120213183151/180704103137/p_O.jpg",
    "product_id": 102
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 103
  },
  {
    "path": "https://kubnews.ru/upload/iblock/272/272d467b0cee22d8513d9f7d6d1c8bff.jpg",
    "product_id": 104
  },
  {
    "path": "https://cyprusbutterfly.com.cy/assets/cache_image/images/news/ostorozhno-yadovitaya-klubnika-na-ferme-v-zigi_0x0_977.jpg",
    "product_id": 105
  },
  {
    "path": "https://images.ua.prom.st/1606776508_w640_h640_dekorativnye-frukty-krupnye.jpg",
    "product_id": 106
  },
  {
    "path": "https://cdnn1.img.armeniasputnik.am/img/07e5/0a/17/34606269_293:0:1720:1427_1920x0_80_0_0_a18a210d469b09fd2b6e8e4f47552b46.jpg",
    "product_id": 107
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 108
  },
  {
    "path": "https://cdnn21.img.ria.ru/images/07e5/02/10/1597717744_0:74:3072:1802_1920x0_80_0_0_6741380118b142a3de06d8f94be36315.jpg",
    "product_id": 109
  },
  {
    "path": "https://s0.rbk.ru/v6_top_pics/media/img/6/83/755650190202836.jpg",
    "product_id": 110
  },
  {
    "path": "https://inbusiness.kz/ru/images/original/37/images/d8tOhj5F.jpg",
    "product_id": 111
  },
  {
    "path": "http://www.menslife.com/upload/iblock/bd8/kakie_yagody_samye_poleznye.jpg",
    "product_id": 112
  },
  {
    "path": "https://kubnews.ru/upload/iblock/272/272d467b0cee22d8513d9f7d6d1c8bff.jpg",
    "product_id": 113
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 114
  },
  {
    "path": "https://kubnews.ru/upload/iblock/272/272d467b0cee22d8513d9f7d6d1c8bff.jpg",
    "product_id": 115
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 116
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 117
  },
  {
    "path": "http://www.menslife.com/upload/iblock/69c/top_20_maloizvestnykh_no_ochen_interesnykh_ekzoticheskikh_fruktov.jpg",
    "product_id": 118
  },
  {
    "path": "https://new-science.ru/wp-content/uploads/2020/09/6515-2.jpg",
    "product_id": 119
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 120
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 121
  },
  {
    "path": "https://257824.selcdn.ru/yamalnews/d77de11e-30d.jpg",
    "product_id": 122
  },
  {
    "path": "https://www.agroinvestor.ru/upload/iblock/121/1216f2d145cc1cd86e2dc2ae3fe4c1ee.jpg",
    "product_id": 123
  },
  {
    "path": "http://www.menslife.com/upload/iblock/309/chto_takoe_smuzi_i_kak_poluchit_ot_nego_maksimalnuyu_polzu.jpg",
    "product_id": 124
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 125
  },
  {
    "path": "https://aif-s3.aif.ru/images/026/713/99b947c3082373115469a37c501520ca.jpg",
    "product_id": 126
  },
  {
    "path": "https://roscontrol.com/files/original_images/articles/6f/17/6f178eda01bc71255420.jpg",
    "product_id": 127
  },
  {
    "path": "https://kubnews.ru/upload/iblock/272/272d467b0cee22d8513d9f7d6d1c8bff.jpg",
    "product_id": 128
  },
  {
    "path": "https://rizhky-ta-nizhky.com.ua/sites/default/files/field/image/kak-pravilno-vyibrat-myaso.png",
    "product_id": 129
  }
]

async function main() {
  const allProducts = await prisma.product.findMany()
  console.log(`Start seeding ...`)
  for (const u of images) {
    if (allProducts.find(product => product.id === u.product_id)) {
      const image = await prisma.image.create({
        data: u,
      })
      console.log(`Created image with id: ${image.id}`)
    }
  }
  console.log(`Seeding finished.`)
}


// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

