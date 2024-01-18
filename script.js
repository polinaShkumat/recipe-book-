const recipesData = {
    breakfast:[
        { name: "Omlette", link: "Omlette.html", photo:"https://i.pinimg.com/564x/6e/da/96/6eda96ec5a27ec48add633bafbe802c4.jpg"},
        { name: "fruits", link: "fruits.html", photo:"https://i.pinimg.com/564x/fa/18/cd/fa18cd93bd2cb1c387f2d48816a01a96.jpg"},
        { name: "Avocado Toast", link: "Avocado Toast.html", photo:"https://i.pinimg.com/474x/c6/ac/28/c6ac2805426dc4525337fc4bf44fe8f1.jpg"},
 ],
 lunch:[
        { name: "Chicken Salad", link: "Chicken Salad.html", photo:"https://i.pinimg.com/474x/49/b6/96/49b6961a7ba36d45b56792e4d53a5513.jpg"},
        { name: "Wrap", link: "Wrap.html", photo:"https://i.pinimg.com/474x/1b/77/dc/1b77dc9644a875c91d3e2bdfbc52093f.jpg"},
        { name: "Bowl", link: "Bowl.html", photo:"https://i.pinimg.com/474x/ea/8f/5e/ea8f5e202dfc89aa7b8eacd4c1ff4653.jpg"},
],
dinner: [
    { name: "pasta", link: "pasta.html", photo:"https://i.pinimg.com/474x/cf/33/cd/cf33cde14136d4110716049f4c39c899.jpg"},
    { name: "Salmon", link: "salmon.html", photo:"https://i.pinimg.com/564x/6e/da/96/6eda96ec5a27ec48add633bafbe802c4.jpg"},
    { name: "Meat", link: "Meat.html", photo:"https://i.pinimg.com/474x/27/c6/45/27c6450a6a51b99ad2c44e7ddb10d4df.jpg"},
]
};


function showRecippe(meal){
    const recipesSection = document.getElementById("recipes");
    const recipesList = recipesData[meal];
    recipesSection.innerHTML="";
    recipesList.forEach(recipe => {
        const recipeItem = document.createElement("div");
        const recipeLink = document.createElement ("a");
        recipeLink.textContent = recipe.name;
        recipeLink.href=recipe.link;
        recipeItem.appendChild(recipeLink);
        recipesSection.appendChild(recipeItem);

    }  );
}



















