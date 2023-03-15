export const get_categories = "/api_category.php";
export const get_question = (
  categoryid: number,
  amount: number,
  difficulty: "easy" | "medium" | "hard"
) =>
  `/api.php?amount=${amount || 5}&category=${categoryid || 9}&difficulty=${
    difficulty || "easy"
  }`;
