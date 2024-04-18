export default {
    mealName: "",
    mealPrice: 0,
    myFun1(Select_Meal_ID, Table1) {
        const mealId = Select_Meal_ID.text;
        const tableData = Table1.tableData;

        const row = tableData.find(item => item.mealId === mealId);

        if (row) {
            this.mealName = row.name;
            this.mealPrice = row.price;

            console.log("Name of the meal:", this.mealName);
            console.log("Price of the meal:", this.mealPrice);
        } else {
            console.log("Meal not found with ID:", mealId);
        }

        return { mealName: this.mealName, mealPrice: this.mealPrice };
    }
};
