import bcrypt from 'bcryptjs';

const data= {
   users: [
      {
        name: 'Admin Bianca',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
      },
      {
         //customer
        name: 'User Bianca',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],
    products:[
      {
         name: "Tiny Pearl Earrings",
         category: "Earrings",
         image: '/images/earrings1.png',
         price: 80,
         countInStock: 10,
         brand: "Her Jewelries",
         rating: 5,
         numReview: 17,
         description: 'Sold as pair.'
      },
      {
         name: "Her Earrings",
         category: 'Earrings',
         image: '/images/earrings2.png',
         price: 100,
         countInStock: 12,
         brand: 'Her Jewelries',
         rating: 4.5,
         numReview: 6,
         description: 'Sold as pair.'
      },
      {

         name: "Piercing",
         category: 'Earrings',
         image: '/images/earrings3.png',
         price: 88,
         countInStock: 0,
         brand: 'Her Jewelries',
         rating: 4.5,
         numReview: 5,
         description: 'Sols as pair.'
      },
      {

         name: "Rounded Gold Earrings",
         category: 'Earrings',
         image: '/images/earrings4.png',
         price: 120,
         countInStock: 19,
         brand: 'Her Jewelries',
         rating: 4.5,
         numReview: 9,
         description: 'Sold as pair.'
      },
      {

         name: "Beaded Huggies",
         category: 'Earrings',
         image: '/images/earrings5.png',
         price: 110,
         countInStock: 3,
         brand: 'Her Jewelries',
         rating: 4.5,
         numReview: 15,
         description: 'Sold as pair.'
      },
      {
         name: "Pearl Round Earrings",
         category: 'Earrings',
         image: '/images/earrings6.png',
         price: 120,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Sold as pair'
      },
      {
         name: "Baguette Diamond Line Earrings",
         category: 'Earrings',
         image: '/images/earrings7.png',
         price: 99,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Sold as pair'
      },
      {
         name: "Clip Like Earrings",
         category: 'Earrings',
         image: '/images/earrings8.png',
         price: 89,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Sold as pair'
      },
      {
         name: "Pave Diamond Bar Studs",
         category: 'Earrings',
         image: '/images/earrings9.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Sold as pair'
      },
      {
         name: "Tiny Gold Earrings",
         category: 'Earrings',
         image: '/images/earrings10.png',
         price: 170,
         countInStock: 3,
         brand: 'Her Jewelries',
         rating: 4.5,
         numReview: 15,
         description: 'Sold as pair.'
      },
      {
         name: "Lighting Bolt Diamond Earrings",
         category: 'Earrings',
         image: '/images/earrings11.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Sold as pair'
      },
      {
         name: "Ear to Ear Diamond Curve Studs",
         category: 'Earrings',
         image: '/images/earrings12.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Sold as pair'
      },
      {
         name: "Inital Letter Necklace",
         category: 'Necklace',
         image: '/images/necklace1.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Excluded from all sales and promotion.'
      },
      {
         name: "Cross Diamond Necklace",
         category: 'Earrings',
         image: '/images/necklace2.png',
         price: 170,
         countInStock: 3,
         brand: 'Her Jewelries',
         rating: 4.5,
         numReview: 15,
         description: 'Excluded from all sales and promotion.'
      },
      {
         name: "Long Tiny Pendant Necklace",
         category: 'Earrings',
         image: '/images/necklace3.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Excluded from all sales and promotion.'
      },
      {
         name: "Gold Round Necklace",
         category: 'Necklace',
         image: '/images/necklace4.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: 'Excluded from all sales and promotion.'
      },
      {
         name: "Elliptical Pearl Pendant Necklace",
         category: 'Earrings',
         image: '/images/necklace5.png',
         price: 180,
         countInStock: 17,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 10,
         description: '9mm x 7mm Oval-shaped freshwater cultured pearl (approx)'
      },
      {
         name: "Lucky Pear Necklace",
         category: 'Necklace',
         image: '/images/necklace6.png',
         price: 127,
         countInStock: 12,
         brand: 'Her Jewelries',
         rating: 5.0,
         numReview: 8,
         description: 'Excluded from all sales and promotion.'
      },

    ]
}
export default data;