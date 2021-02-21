// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const startButton = document.getElementById('startButton');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
const myName = `Bert Witzel`; 
const meals = [
    {
        name: 'Tuna Casserole',
        ingredients: [
            '3 cans of tuna in water',
            '1 can each of cream of celery soup, cream of chicken soup, and cream of mushroom soup',
            '1 bag of frozen vegetables (peas, carrots and corn)',
            '1 large bag of egg noodles',
            '1 can of fried onion rings, 1 packet potato chips or 1 small packet corn flakes'
        ],
        instructions: [
            'Cook egg noodles as directed on package. While boiling water, pre-heat oven to 400F.',
            'Drain egg noodles. Mix together all ingredients except fried onion rings. Put in a casserole dish or a 9"x13"x2" pan. Cook for 20 minutes.',
            'Sprinkle fried onion topping on top of baked casserole. Bake for an additional 3 minutes, or until fried onion is slightly brown.',
            'Let cool for 5 minutes and serve.'
        ],
        index: 0
    },
    {
        name: 'Macaroni and Cheese',
        ingredients: [
            '1/2 c butter',
            '1/2 c flour',
            '4 c milk',
            '2 c cheddar cheese',
            '1/2 tsp cayenne pepper',
            '1 lb cooked macaroni'
        ],
        instructions: [
            'Make a roux using half cup of butter (a stick) and half a cup of flour.',
            'Add 4 cups of heated milk and stir until smooth to complete the white sauce.',
            'Add cheese and cayenne pepper.',
            'Finally, mix with a pot of cooked pasta.'
        ],
        index: 1
    },
    {
        name: 'Spaghetti Carbonara',
        ingredients: [
            '3-4 quarts boiling salted water',
            '8 ounces spaghetti',
            '3 tablespoons olive oil',
            '4 slices smoked bacon, diced',
            '1 medium onion, chopped',
            '1/2 teaspoon-1 tablespoon crushed red pepper',
            '12-16 ounces tomato sauce',
            '2-4 ounces freshly grated Parmesan cheese'
        ],
        instructions: [
            'Boil spaghetti 6 minutes or so, just al dente, drain.',
            'As water is put on to boil, start heating olive oil in medium saucepan, and sauté bacon until fat is just clear.',
            'Add onion and sauté until soft.',
            'Add crushed red pepper and cook 2-3 minutes more.',
            'Add tomato sauce and heat through.',
            'Remove from heat, add Parmesan cheese, and serve immediately over spaghetti.',
            'May garnish with additional Parmesan cheese.'
        ],
        index: 2
    },
    {
        name: 'Hamburger',
        ingredients: [
            '1 lb ground beef',
            'Herbs and spices',
            'Cheese',
            'Salad (lettuce, spinach, alfalfa sprouts, tomato, onion',
            '1 hamburger bun for each burger'
        ],
        instructions: [
            'Remove the ground beef from the package and shape by hand into burgers. You should get between 4-6 burgers from 500g (1.1 lb) of beef.',
            'If adding optional ingredients, either season the outside or mix into the beef before forming the patties. Overworking the beef will result in mushy meat that won\'t stick together, so only mix the minimum necessary and do so by hand.',
            'The burgers can be fried or grilled for about 4-5 mins on each side for burgers which aren\'t too thick.',
            'Let the burger rest for several minutes before serving to let the juices cool down and not burst out at first bite.',
            'Ensure your burgers are fully cooked through before serving. If your burgers are quite thick or if you are unsure, you can cut one open to ensure the insides are browned. If the insides are red, there is a chance that the meat is not fully cooked. Alternately, you can insert a meat thermometer into the center of the burger, if the temperature reads less than 71°C (160°F), your burger is undercooked.',
            'Serve each burger on a bun.'
        ],
        index: 3
    },
    {
        name: 'Chicken Soup',
        ingredients: [
            '2 cups shredded cooked chicken',
            '3 cups chicken broth',
            '1/4 cup freshly squeezed lemon juice',
            '2 Tbs lemon zest, finely grated',
            '1 Tbs minced garlic',
            'Kosher salt and freshly ground black pepper, to taste',
            '1 medium onion, finely diced',
            '4 ribs celery, chopped',
            '1/2 cup heavy cream',
            '12 sprigs fresh thyme',
            '5 sprigs fresh rosemary',
            '2 Tbs olive oil',
            '1/2 large carrot, finely diced',
            '3 bay leaves'
        ],
        instructions: [
            'Heat oil in a large pot over medium low heat. Add garlic, onion, celery, carrot, and a pinch of salt and cook until onion is translucent. Avoid browning if you wish to keep the soup lighter in color.',
            'Add remaining ingredients and bring to a boil over medium high heat. Reduce heat to a simmer, cover, and cook 30 minutes.',
            'Remove herbs (if you wish) and check for taste. Season with salt and pepper to taste before serving.'
        ],
        index: 4
    },
    {
        name: 'Red beans and rice',
        ingredients: [
            '1 pound red beans',
            '6 large ham hocks (4 pounds)',
            '2 cups finely chopped celery (1/2 stalk)',
            '2 cups finely chopped onions (one medium)',
            '2 cups finely chopped bell peppers (one medium)',
            '5 Bay leaves (go real easy here, or you will taste it in your nose)',
            '3 Tbls Paul Prudholme\'s Seafood Magic, or a similar spice',
            '1 Tbls Tabasco Sauce or similar chili sauce',
            '4 Cups cooked Rice (preferably converted)'
        ],
        instructions: [
            'Cover beans with water, let stand over night. Drain.',
            'Place ham hocks, celery, onions, bell peppers, Bay leaves, and seasoning into large sauce pan with 10 cups water.',
            'Cover and bring to boil. Simmer until meat is fork tender, about an hour after boiling starts, stir occasionally.',
            'Remove ham hocks from pan, set aside, skim fat from pan, discard.',
            'Remove a significant fraction of liquid from pan, add drained beans, add back just enough liquid to cover beans. Simmer beans until they just begin to break up and liquid starts to become creamy, about 45 minutes. Stir frequently. Add back liquid as needed to keep beans covered.',
            'If beans begin to scorch, do not stir, transfer mixture to another pan without scraping scorched beans into new pot.',
            'Add ham hocks, cook 45 minutes more, SERVE IMMEDIATELY'
        ],
        index: 5
    },
    {
        name: 'Quiche',
        ingredients: [
            '5 eggs',
            '1 1/3 cup (320 mL) cream (approximately 30% fat)',
            '1 teaspoon chopped fresh tarragon',
            '1 dash ground nutmeg',
            '1/4 teaspoon salt',
            '1/8 teaspoon ground pepper',
            '1 prepared frozen pie crust',
            '3/4 cup (180 mL) freshly-grated Swiss cheese'
        ],
        instructions: [
            'Preheat oven to 375°',
            'Place the eggs, cream, tarragon, nutmeg, salt, and pepper in a blender; blend as briefly as possible until they form a homogeneous mixture',
            'In the pie crust, create alternating layers of the shredded cheese and the mixture from the blender until the crust is full',
            'Bake the quiche for 35-40 minutes; a toothpick or fork inserted into its middle should come out "clean"',
            'Remove the quiche from the oven and let it cool for at least 20 minutes before serving'
        ],
        index: 6
    }
]; 

// HELPER FUNCTIONS
const getDay = () => {
    const today = new Date;
    const day = today.getDay();
    const dayLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayLong[day];
};

const getRandomWeeklyMeals = () => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    return randomMeal;
};

const displayWeeklyMealPlan = () => {
    for (let i = 0; i < 7; i++) {
        const meal = getRandomWeeklyMeals();
        const liMain = document.createElement('li');
        // const ul1 = document.createElement('ul');
        // const ul2 = document.createElement('ul');
        // ul1.className = 'hidden';
        // ul2.className = 'hidden';
   
        liMain.setAttribute('data-index', meal.index);
        liMain.innerHTML = meal.name;
        liMain.className = 'meal-item';
        mealList.appendChild(liMain);
        // liMain.appendChild(ul1);
        // liMain.appendChild(ul2);
        // for (let i = 0; i < meal.ingredients.length; i++) {
        //     const liSecondary = document.createElement('li');
        //     liSecondary.innerHTML = meal.ingredients[i];
        //     ul1.appendChild(liSecondary);
        // }
        // for (let i = 0; i < meal.instructions.length; i++) {
        //     const liSecondary = document.createElement('li');
        //     liSecondary.innerHTML = meal.instructions[i];
        //     ul2.appendChild(liSecondary);
        // } 
    } 
};

const showPlan = () => {
    displayWeeklyMealPlan();
    headline.classList.add('slideUp');
    headline.style.marginBottom = '0';
    headline.style.fontSize = '3em';
    tagline.textContent = `Here's your weekly meal plan!`;
    tagline.style.marginTop = '0';
    planDiv.classList.remove('hidden');
    startButton.style.display = 'none';
};

const createModal = () => {

}

headline.textContent = getDay();
tagline.textContent = `Hey ${myName}, click the button below to see your weekly meal planner.`;

// EVENT LISTENERS
startButton.addEventListener('click', showPlan);


