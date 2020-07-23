export const addItemToCart = (cartItems, cartItemToAdd) => {
  //find exisitng items
  const exisitingItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (exisitingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
