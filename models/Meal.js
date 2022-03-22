class Meal {
  constructor(
    id,
    cateegoryIds,
    title,
    affordability,
    complexity,
    imgageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegiterian
  ) {
      this.id=id;
      this.categoryIds=categoryIds;
      this.title=title;
      this.affordability=affordability;
      this.complexity=complexity;
      this.imgageUrl=imgageUrl;
      this.duration=duration;
      this.ingredients=ingredients;
      this.steps=steps;
      this.isVegan=isVegan;
      this.isGlutenFree=isGlutenFree;
      this.isVegiterian=isVegiterian;
  }
}
export default Meal;
