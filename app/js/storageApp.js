(function(){
  var app = angular.module('storageApp', ['ngAnimate']);
  app.controller('controllerStorage', function($scope) {
    var vm = this;

    vm.formatPrice = function(priceValue) {
      return ( (priceValue / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
      // '₴' + 
    }
    vm.sortType = 'name';
    vm.sortReverse = false;
    vm.sortTypes = [
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

    vm.categories = [
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

    vm.cart = [
      {
         title : 'Чамп',
         quantity : 1,
         price : 1755
      },

      {
         title : 'Колканон',
         quantity : 2,
         price : 1530
      },
    ]

    vm.cartSummary = 0;

    vm.add = function() {
      vm.cart.push({title: vm.cartTitleNew, quantity: 1, price: vm.cartPriceNew});
      console.log(vm.cartTitleNew);
      vm.cartTitleNew = '';
      vm.cartPriceNew = '';
      //vm.cartQuantityNew = '';
    }

    vm.remove = function(index) {
      vm.cart.splice(index, 1);
    }

    vm.items = [
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
      },



      
    ]
    
  })
  
})()
