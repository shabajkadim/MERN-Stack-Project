import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import AllRoutes  from './Router/index.js'
import mongoose from 'mongoose'
// import Stripe from "stripe";





const app=express()
app.use(express.json({limit:"10mb"}))
app.use(cors())
dotenv.config()



app.get('/',((req,res)=>{
    res.send("welcome....")
}))


// console.log(process.env.STRIPE_SECRET_KEY)
app.use('/api/v1',AllRoutes)





// console.log(process.env.STRIPE_SECRET_KEY)


// const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)

// app.post("/api/v1/check-payment",async(req,res)=>{
//      try{
//       const params = {
//           submit_type : 'pay',
//           mode : "payment",
//           payment_method_types : ['card'],
//           billing_address_collection : "auto",
//           shipping_options : [{shipping_rate : "shr_1P9wr1SIAWllnLs0d6sGGNdv"}],

//           line_items : req.body.map((item)=>{
//             return{
//               price_data : {
//                 currency : "inr",
//                 product_data : {
//                   name : item.name,
//                   // images : [item.image]
//                 },
//                 unit_amount : item.price * 100,
//               },
//               adjustable_quantity : {
//                 enabled : true,
//                 minimum : 1,
//               },
//               quantity : item.qty
//             }
//           }),

//           success_url : `${process.env.FRONTEND_URL}/demo`,
//           cancel_url : `${process.env.FRONTEND_URL}/cancel`,

//       }

      
//       const session = await stripe.checkout.sessions.create(params)
//       console.log(session)
//       res.status(200).json(session.id)
//      }
//      catch (error){
//         res.status(500).json(error)
//      }

// })





mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connect");
})

app.listen(8000,(()=>{console.log("running on port 8000")}))






// Express server
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import AllRoutes from './Router/index.js';
// import mongoose from 'mongoose';
// import Stripe from 'stripe';

// const app = express();
// app.use(express.json({ limit: "10mb" }));
// app.use(cors());
// dotenv.config();

// app.get('/', (req, res) => {
//   res.send("Welcome...");
// });

// app.use('/api/v1', AllRoutes);

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/api/v1/check-payment", async (req, res) => {
//   try {
//     const params = {
//       submit_type: 'pay',
//       mode: "payment",
//       payment_method_types: ['card'],
//       billing_address_collection: "auto",
//       shipping_options: [{ shipping_rate: "shr_1P9wr1SIAWllnLs0d6sGGNdv" }],
//       line_items: req.body.map((item) => ({
//         price_data: {
//           currency: "inr",
//           product_data: { name: item.name },
//           unit_amount: item.price * 100,
//         },
//         adjustable_quantity: { enabled: true, minimum: 1 },
//         quantity: item.qty
//       })),
//       success_url: `${process.env.FRONTEND_URL}/demo`,
//       cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//     };

//     const session = await stripe.checkout.sessions.create(params);
//     res.status(200).json(session.id);
//   } catch (error) {
//     console.error("Error occurred while processing payment:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
//   // res.send("layment page")
// });

// mongoose.connect(process.env.DATABASE_URL).then(() => {
//   console.log("Database connected");
// });

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });
