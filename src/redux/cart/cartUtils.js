export const addItemToCart = (cartItem, cartItemToAdd) => {
  //find exisitng items
  const exisitngItem = cartItem.find((item) => item.id === cartItemToAdd.id);

  if (exisitngItem) {
    return cartItem.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : cartItem
    );
  } else return [...cartItem, { ...cartItemToAdd, quantity: 1 }];
};
