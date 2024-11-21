const experess = require('express');
const router = experess.Router();
const controller = require('../controller');

router.get('/', (req, res) => {
  res.send('flipDeal');
});

router.get('/cart-total', controller.calculateTotalPrice);
router.get('/membership-discount', controller.membershipDiscount);
router.get('/calculate-tax', controller.calculateTotalCartTax);
router.get('/estimate-delivery', controller.estimateDeliveryTime);
router.get('/shipping-cost', controller.calculateShippingCost);
router.get('/loyalty-points', controller.calculateLoyaltyPoints);

module.exports = router;
