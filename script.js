document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart
    let cart = [];
  
    // Function to add item to cart
    function addToCart(item) {
      cart.push(item);
      updateCartDisplay();
      alert(item.name + ' has been added to your cart.');
    }
  
    // Function to update cart display (this could be improved based on your actual cart display logic)
    function updateCartDisplay() {
      const cartCount = document.getElementById('cart-count');
      if (cartCount) {
        cartCount.textContent = cart.length;
      }
    }
  
    // Attach event listeners to add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', event => {
        const card = event.target.closest('.card');
        const itemName = card.querySelector('.card-title').textContent;
        const itemPrice = card.querySelector('.card-text').textContent;
  
        const item = {
          name: itemName,
          price: itemPrice
        };
  
        addToCart(item);
      });
    });
  
    // Function to handle navigation
    function handleNavigation() {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const targetPage = link.getAttribute('href');
          window.location.href = targetPage;
        });
      });
    }
  
    // Call navigation handler
    handleNavigation();
  
    // Initial cart display update
    updateCartDisplay();
  });
  