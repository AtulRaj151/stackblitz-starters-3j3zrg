const TAXRATE = 5;
const DISCOUNT_PERCENTAGE = 10;
const LOYALTY_RATE = 2;

module.exports.calculateTotalPrice = (req, res) => {
  const { newItemPrice, cartTotal } = {
    newItemPrice: parseFloat(req.query.newItemPrice),
    cartTotal: parseFloat(req.query.cartTotal),
  };

  if (isNaN(newItemPrice) || isNaN(cartTotal)) {
    return res.status(400).send({ error: 'invalid input' });
  }
  const result = newItemPrice + cartTotal;
  return res.status(200).send(result.toString());
};

module.exports.membershipDiscount = (req, res) => {
  const { cartTotal, isMember } = {
    cartTotal: parseFloat(req.query.cartTotal),
    isMember: Boolean(req.query.isMember),
  };
  let result = isMember
    ? cartTotal - cartTotal * (DISCOUNT_PERCENTAGE / 100)
    : cartTotal;
  return res.status(200).send(result.toString());
};

module.exports.calculateTotalCartTax = (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);
  let result = cartTotal * (TAXRATE / 100);
  return res.status(200).send(result.toString());
};

module.exports.estimateDeliveryTime = (req, res) => {
  const { shippingMethod, distance } = {
    shippingMethod: req.query.shippingMethod,
    distance: parseFloat(req.query.distance),
  };
  let result = '1 day per {0} kms.';
  if (shippingMethod.toLowerCase() === 'express') {
    result = result.replace("{0}", '100');
  } else if (shippingMethod.toLowerCase() == 'standard') {
    result = result.replace("{0}", '50');
  }
  return res.status(200).send(result);
};

module.exports.calculateShippingCost = (req, res) => {
  const { weight, distance } = {
    weight: parseFloat(req.query.weight),
    distance: parseFloat(req.query.distance),
  };
  let result = weight * distance * 0.1;
  return res.status(200).send(result.toString());
};
module.exports.calculateLoyaltyPoints = (req, res) => {
  const purchaseAmount = parseFloat(req.query.purchaseAmount);
  let result = purchaseAmount * LOYALTY_RATE;
  return res.status(200).send(result.toString());
};
