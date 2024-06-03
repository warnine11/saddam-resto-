/* eslint-disable no-shadow */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createitemrestaurant } from '../templates/restaurant-content';

const Like = {
  async render() {
    return `
    <div class="katalog">
    <h1 tabindex="0" class="katalog_label">Favorite Kamu</h1>
    <div id="Restaurant"class="posts">
    </div>
  </div>
</section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const RestaurantContainer = document.querySelector('.posts');

    restaurant.forEach((restaurant) => {
      RestaurantContainer.innerHTML += createitemrestaurant(restaurant);
    });

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('.header-section');
    if (heroContent) {
      heroContent.style.display = 'none';
    }
  },
  

};
export default Like;
