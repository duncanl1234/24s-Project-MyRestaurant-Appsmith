export default {
    mealName: "",
    mealPrice: 0,
    myFun1(Input1, Ingredients_Table) {
        const mealId = Input1.text;
        const tableData = Ingredients_Table.tableData;

        const row = tableData.find(item => item.mealId === mealId);

        if (row) {
            this.mealIng = row.ingredientId;
						this.ingName = row.name;

            console.log("Name of the meal:", this.mealName);
            console.log("Ingredients in the meal:", this.mealIng);
        } else {
            console.log("Meal not found with ID:", mealId);
        }

        return { mealIngId: this.mealIng, mealIngName: this.ingName };
    }
};