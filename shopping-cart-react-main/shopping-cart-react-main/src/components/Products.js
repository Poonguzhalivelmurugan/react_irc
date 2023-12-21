import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentIcon from '@mui/icons-material/Payment';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './Product.css';

const cardData = [
  {
    title: 'MakeUp Brush',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 1000</>,
    imageUrl: 'https://tse3.explicit.bing.net/th?id=OIP.PpUPwdYNFeZJYdoOPoBQWAHaFD&pid=Api&P=0&h=180',
  },
  {
    title: 'LipStick',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 700</>,
    imageUrl: 'http://4.bp.blogspot.com/-CWiPRPoJqUo/VCeijEh6cSI/AAAAAAAACZw/xqGnWVc6Y-k/s1600/new%2Bmaybelline%2Bmatte%2Blipstick%2Bswatches%2B.jpg',
  },
  {
    title: 'Eye Lashes',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 800</>,
    imageUrl: 'https://www.lux-review.com/wp-content/uploads/2021/02/false-eyelashes.jpg',
  },
  {
    title: 'Eye Liner',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://i5.walmartimages.com/asr/86da78ed-e9a5-46bd-98d3-c20aa57d960a_1.01d6b1c71655393a0ea797a69577f44d.jpeg', // Replace with the actual URL for the image
  },
  {
    title: 'Cream',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 400</>,
    imageUrl: 'https://i5.walmartimages.com/asr/d7f00b96-8ea8-4b63-ba36-13a282631e8b_1.6a1851ceebbf4a3b24a2d1c494a659d2.jpeg', 
  },
  {
    title: 'BB Cream',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://n1.sdlcdn.com/imgs/h/n/0/Lakme-Imported-9-To-5-SDL833256120-1-289ae.jpg' // Replace with the actual URL for the image
  },
  {
    title: 'Ponds',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 100</>,
    imageUrl: 'https://i0.wp.com/road2beauty.com/wp-content/uploads/2015/08/DSC08128.jpg', 
  },
  {
    title: 'Nail Polish',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 200</>,
    imageUrl: 'https://i5.walmartimages.com/asr/facacd48-c3ae-4bac-8d33-c49e4ef8699c_6.78ba75aa6b05d6212aa15f20feb23873.png', // Replace with the actual URL for the image
  },
  {
    title: 'Nail Polish',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://i5.walmartimages.com/asr/2421eae0-32dc-4f35-8bd5-28051c53d08c_1.1f604f66807cda5fc69a9790f88687de.jpeg', // Replace with the actual URL for the image
  },
  {
    title: 'Lakme cream',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://www.newszii.com/wp-content/uploads/2017/postimg/MM576114898447200609.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Rose Water',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 40000</>,
    imageUrl: 'https://olivos.al/wp-content/uploads/2020/07/Rose-Water-2.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Himalaya Facewash',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 69999</>,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0279/8177/4927/products/Face-Wash-150ml---Gentle-Exfoliating-Apricot_2048x2048.png?v=1619410515', // Replace with the actual URL for the image
  },
  {
    title: 'FairLovely',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 29999</>,
    imageUrl: 'http://image3.mouthshut.com/images/imagesp/925047643s.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Makeup kit',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 25000</>,
    imageUrl: 'https://2.bp.blogspot.com/-FTMNLmQLcO8/VuY4kJO08qI/AAAAAAAABqA/jKQJFUYDKCUvy6MpvMXPN1i9jG2uaZz7Q/s1600/SAM_1081.JPG', // Replace with the actual URL for the image
  },
  {
    title: 'Eyebrow Pencil',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 20000</>,
    imageUrl: 'https://i5.walmartimages.com/asr/2890ff84-a495-4c20-8db3-5ccea7d33ee0_1.7fa279f476d4ae8b9c992e50f89c2892.jpeg', // Replace with the actual URL for the image
  },
];

export const Products = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%', margin: '1rem' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 850 ,marginBottom: '1rem', height:'100%'}}>
          <CardMedia component="img" width="200px" height="200"  style={{ objectFit: 'cover' }} alt={card.title} src={card.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><PaymentIcon/>Buy now</Button>
            <Button size="small" ><ShareIcon />Share</Button>
            <Button size="small"><ShoppingCartIcon/>Add Cart</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
export default Products;