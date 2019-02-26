import { makeUrl } from '../../commons/helpers/url';
import { slugify } from '../../commons/helpers/strings';

export function transformFlyouts(flyouts, couponsSubnavLinks) {
  return Object.keys(flyouts).reduce((result, key) => {
    let flyout = flyouts[key];
    switch (flyout.id) {
      case 'coupons':
        flyout = transformCoupons(flyout, couponsSubnavLinks);
        break;
      case 'goods':
        flyout = transformGoods(flyout);
        break;
      case 'local':
        flyout = transformLocal(flyout);
        break;
      default:
        flyout = transformFlyout(flyout);
        break;
    }
    return Object.assign(result, {
      [key]: flyout,
    });
  }, {});
}

/**
 * Layout the categories using columns up to 4,
 * max 7 items per column
 * @param {Array} categories - categories
 */
function layoutCategories(categories) {
  if (categories.length === 0) {
    return [];
  }

  categories = categories.slice(0, 28); // only keep the first 28 items
  let count = 7; // how many items per column
  const columns = Math.floor((categories.length - 1) / count) + 1;
  if (categories.length <= columns * (count - 1)) {
    count = count - 1; // fill 6 items per column
  }

  // layout to columns base on the count number
  return categories.reduce(
    (acc, item) => {
      const column = acc[acc.length - 1]; //last column
      if (column.length < count) {
        column.push(item);
      } else {
        acc.push([item]);
      }
      return acc;
    },
    [[]]
  );
}

function getLocalQueryParameters(category) {
  const { id, taxonomyLvl, path } = category;
  if (id === 'all-deals') {
    return { context: 'local' };
  }

  if (taxonomyLvl && path) {
    return { category: path, [`category${taxonomyLvl}`]: id };
  }
  return { category: id };
}

function transformLocal(local) {
  if (!local) {
    return local;
  }

  const { categories, baseUrl } = local;

  local.categories = categories.map(category =>
    Object.assign(category, {
      url: category.url || makeUrl(baseUrl, getLocalQueryParameters(category)),
    })
  );

  return transformFlyout(local);
}

function transformCoupons(coupons, couponsSubnavLinks) {
  if (!coupons) {
    return coupons;
  }

  if (Array.isArray(couponsSubnavLinks) && couponsSubnavLinks.length) {
    coupons.couponsSubnavLinks = couponsSubnavLinks;
  }

  return transformFlyout(coupons);
}

function transformFlyout(flyout) {
  const { id, categories } = flyout;
  categories.forEach(item => {
    const { name, text, link, url } = item;

    Object.assign(item, {
      id: item.id || slugify(name || text || ''),
      url: url || link,
      name: name || text,
      tab: `${id}-tab`,
    });
  });
  flyout.columns = layoutCategories(categories);
  return flyout;
}

function makeGoodsUrl({ id, url }) {
  if (url) {
    return url;
  }

  return `/goods/${encodeURIComponent(id)}`;
}

function transformGoods(goods) {
  if (!goods) {
    return goods;
  }

  const { categories, flatLinks, shopAllTitle } = goods;
  goods.categories = categories.map(category => ({
    ...category,
    url: makeGoodsUrl(category),
    children: (category.children || []).map(item => ({
      ...item,
      url: makeGoodsUrl(item),
    })),
    title: shopAllTitle.replace('%category%', category.name),
  }));
  goods.flatLinks = flatLinks.map(link => ({
    ...link,
    url: makeGoodsUrl(link),
  }));

  return goods;
}
