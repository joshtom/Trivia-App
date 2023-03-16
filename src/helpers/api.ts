export const get_categories = "/api_category.php";
export const get_question = (categoryid: any, amount: any, difficulty: any) =>
  `/api.php?amount=${amount}&category=${categoryid}&difficulty=${difficulty}`;
