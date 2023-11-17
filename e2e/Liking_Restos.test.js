const assert = require('assert');
Feature('Liking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('.nothing-liked-restaurant');
  I.see('Nothing Liked Restaurant', '.nothing-liked-restaurant');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Nothing Liked Restaurant', '.nothing-liked-restaurant');
  I.amOnPage('/');

  I.seeElement('.resto-title a');
  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(2);

  I.seeElement('#like-button');
  I.click('#like-button');
  I.wait(2);

  I.amOnPage('/#/favourite');
  I.seeElement('.resto-item');

  const likedRestoCard = await I.grabTextFrom('.resto-title');
  assert.strictEqual(firstRestoTitle, likedRestoCard);

  I.wait(5);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('Nothing Liked Restaurant', '.nothing-liked-restaurant');
  I.amOnPage('/');

  I.seeElement('.resto-title a');
  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(2);

  I.seeElement('#like-button');
  I.click('#like-button');
  I.wait(2);

  
  I.amOnPage('/#/favourite');
  I.seeElement('.resto-item');

  const likedRestoCard = await I.grabTextFrom('.resto-title');
  assert.strictEqual(firstRestoTitle, likedRestoCard);
  
  I.click(firstResto);
  I.wait(2);

  I.seeElement('#like-button');
  I.click('#like-button');
  I.wait(2);
  
  I.amOnPage('/#/favourite');

  const onFav = await I.grabTextFrom('.nothing-liked-restaurant');
  assert.strictEqual(onFav, 'Nothing Liked Restaurant');
});
