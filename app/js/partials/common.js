(function(){
  var app = angular.module('app', ['ngAnimate']);
  app.controller('sortCtrl', function() {
    
    this.sortType = 'name';
    this.sortReverse = false;
    this.sortTypes = [
      {
        sortName : 'name',
        sortDesc : 'Наименование',
        sortReverse : false
      },

      {
        sortName : 'price',
        sortDesc : 'Цена',
        sortReverse : false
      }
    ]

    this.categories = [
      {
         id : 1,
         catName : 'Блюда',
      },

      {
         id : 2,
         catName : 'Напитки',
      },

      {
         id : 3,
         catName : 'Десерты'
      }
    ]
  })

  app.controller('catalogCtrl', function(methodFctr, dataFctr) {

    this.methodFctr = methodFctr;
    this.dataFctr = dataFctr;

    this.cart = [

    ]

    this.getTotalPrice = function() {
      this.cartSummary = 0;
      for (var i = 0; i <= this.cart.length - 1; i++) {
        this.cartSummary = this.cartSummary + this.cart[i].quantity * this.cart[i].price;
      }
      return this.cartSummary;
    }

    this.addToCart = function(selectedItem) {
      for (var i = 0; i <= this.cart.length - 1; i++) {
        if (this.cart[i].name == selectedItem.name) {
          this.cart[i].quantity = this.cart[i].quantity + 1;
          
          return;
        
        }
      }

      this.cart.push({name: selectedItem.name, quantity: 1, price: selectedItem.price});
    }

    this.remove = function(index) {
      this.cart.splice(index, 1);
    }
    
  })

  app.controller('cartCtrl', function(methodFctr, dataFctr) {

    
    
  })

  app.factory('methodFctr', function() {
    return {
      formatPrice: function(priceValue) {
        return ( (priceValue / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
      },
      isEmpty: function(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
      }
    }
  }) 

  app.factory('dataFctr', function() {
    return {
      hello :  'hello',
      catalogItems: [
        {
          id : 1,
          name : 'Колканнон',
          category: 'Блюда',
          image : './img/colcannon.jpg',
          description : 'Блюдо, которое нуждается в переводе. «Колканнон» означает «белокочанная капуста» на ирландском. Это именно то, из чего состоит блюдо: картофельное пюре с листовой или кочанной капустой.',
          price : 7550,
          status : 'unavailable'
        },

        {
          id : 2,
          name : 'Чамп',
          category: 'Блюда',
          image : './img/champ.jpg',
          description : 'Если вы собираетесь обильно и недорого поесть, выбор уже сделан! Чамп, или «паундиз», похож на колканнон, но происходит из севера Ирландии. Он состоит из сливочного картофельного пюре, смешанного с зеленым луком.',
          price : 5225,
          status : 'available'
        },

        {
          id : 3,
          name : 'Боксти',
          category: 'Блюда',
          image : './img/boxty.jpg',
          description : '«Боксти» означает «хлеб для бедных». Это традиционные ирландские картофельные блины. Боксти хорошо сочетается с блюдами из говядины или другими мясным блюдами.',
          price : 8275,
          status : 'available'
        },

        {
          id : 4,
          name : 'Коддл',
          category: 'Блюда',
          image : './img/coddle.jpg',
          description : 'Это блюдо включает в себя слои нарезанной ломтиками свиной колбасы, а также картофель и лук (также нарезанные). Содержит ячмень.',
          price : 4200,
          status : 'available'
        },

        {
          id : 5,
          name : 'Guinness',
          category: 'Напитки',
          image : './img/guinness.jpg',
          description : 'Исконно ирландское пиво с характерным жжённым ароматом, который любят во всем мире.',
          price : 3000,
          status : 'available'
        }
      ]
    }
    
  })
  
})()