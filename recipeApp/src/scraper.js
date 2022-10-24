// const puppeteer = require('puppeteer');

// async function scrapeChannel(url) {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     const [el] = await page.$x('//*[@id="mntl-structured-ingredients_1-0"]/div');
//     const  text = await el.getProperty('textContent');
//     const recipeName = await text.jsonValue();

//     const [el2] = await page.$x('//*[@id="mntl-structured-ingredients_1-0"]/ul');
//     text = el2.getProperty('textContent');
//     const ingredients = await text.jsonValue();

//     browser.close();

//     console.log({recipeName, ingredients})

//     return{recipeName, ingredients}
     
// }

// scrapeChannel('https://www.allrecipes.com/recipe/222037/tater-tots-r-casserole/')

const puppeteer = require('puppeteer');

async function scrapeData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const name = document.getElementsByClassName("wprm-recipe-name")[0].innerText;
    const summary = document.getElementsByClassName("wprm-recipe-summary")[0].innerText;
    const prepTime = document.getElementsByClassName("wprm-recipe-prep-time-container")[0].innerText;
    const cookTime = document.getElementsByClassName("wprm-recipe-cook-time-container")[0].innerText;
    const serveings = document.getElementsByClassName("wprm-recipe-servings-container")[0].innerText;
    const calories = document.getElementsByClassName("wprm-recipe-calories-container")[0].innerText;
    const ingredients = document.getElementsByClassName("wprm-recipe-ingredients-container")[0].innerText;
    const instructions = document.getElementsByClassName("wprm-recipe-instructions-container")[0].innerText;
    const nutrition = document.getElementsByClassName("wprm-nutrition-label-container")[0].innerText;
try {
  const notes = document.getElementsByClassName(
    "wprm-recipe-notes-container"
  )[0].innerText;

  const recipeJson = {
    name: name,
    summary: summary,
    prepTime: prepTime,
    cookTime: cookTime,
    serveings: serveings,
    calories: calories,
    ingredients: ingredients,
    instructions: instructions,
    notes: notes,
    nutrition: nutrition,
  };
  console.log(recipeJson);

} catch (error) {
  const recipeJson = {
    name: name,
    summary: summary,
    prepTime: prepTime,
    cookTime: cookTime,
    serveings: serveings,
    calories: calories,
    ingredients: ingredients,
    instructions: instructions,
    nutrition: nutrition,
  };
  browser.close();
  console.log(recipeJson);
}

    // const [el] = await page.$x('//*[@id="gallery-photos_1-0"]/div/img');
    // const src = await el.getProperty('src');
    // const imageURL = await src.jsonValue();

    // const [el2] = await page.$x('//*[@id="article-heading_1-0"]');
    // const txt = await el2.getProperty('textContent');
    // const title = await txt.jsonValue();

    // const [el3] = await page.$x('//*[@id="wprm-recipe-container-32709"]/div');
    // const txt2 = await el3.getProperty('textContent');
    // const ingredients = await txt2.jsonValue();

    

    // console.log({ingredients});
    
   
}



scrapeData('https://www.simplyquinoa.com/creamy-pumpkin-steel-cut-oats/');