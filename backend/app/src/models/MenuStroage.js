const db = require('../config/db');

class MenuStorage {
  static getMenuInfo(rest_name) {
    return new Promise((resolve, reject) => {
      const query =
        'select menu.id, menu.menu_name,menu.img_url, menu.menu_price, menu.menu_ing FROM menu left join restaurant ON menu.rest_id = restaurant.id where restaurant.rest_name = ?;';
      db.query(query, [rest_name], (err, data) => {
        if (err) throw reject(`${err}`);
        resolve(data);
      });
    });
  }

  static getMenuDetail(menu_id) {
    return new Promise((resolve, reject) => {
      const query =
        'select menu.menu_name,menu.img_url, menu.menu_price, menu.menu_ing FROM menu WHERE menu.id = ?;';
      db.query(query, [menu_id], (err, data) => {
        if (err) throw reject(`${err}`);
        resolve(data);
      });
    });
  }
}

module.exports = MenuStorage;
