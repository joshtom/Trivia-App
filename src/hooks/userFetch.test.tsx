import { renderHook } from "@testing-library/react-hooks";
import axios, { AxiosResponse } from "axios";
import useFetch from "./useFetch";
import {
  IcategoryResponseData,
  IquestionResponseData,
} from "../utils/interface";
import { get_categories } from "../helpers/api";

jest.mock("axios");

describe("useFetch", () => {
  it("should fetch category data and return the response", async () => {
    const responseData: IcategoryResponseData = {
      trivia_categories: [
        {
          id: 9,
          name: "General Knowledge",
        },
      ],
    };
    (
      axios.request as jest.MockedFunction<typeof axios.request>
    ).mockResolvedValue({
      data: responseData,
    } as AxiosResponse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<IcategoryResponseData>(get_categories)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();
    expect(axios.request).toHaveBeenCalledWith({
      url: get_categories,
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data?.trivia_categories.length).toBeGreaterThan(0);
    expect(result.current.error).toBe(null);
  });

  it("should handle errors", async () => {
    const errorMessage = "An error occurred";
    (
      axios.request as jest.MockedFunction<typeof axios.request>
    ).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<IcategoryResponseData>(get_categories)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(axios.request).toHaveBeenCalledWith({
      url: get_categories,
    });
    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error(errorMessage));
  });

  // Test for question data
  it("should fetch question data and return the response", async () => {
    const url = "/api.php?amount=1&category=9&difficulty=easy";
    const responseData: IquestionResponseData = {
      response_code: 0,
      results: [
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "easy",
          question: "What is the largest organ of the human body?",
          correct_answer: "Skin",
          incorrect_answers: ["Heart", "Large Intestine", "Liver"],
        },
      ],
    };
    (
      axios.request as jest.MockedFunction<typeof axios.request>
    ).mockResolvedValue({
      data: responseData,
    } as AxiosResponse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<IquestionResponseData>(url)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();
    expect(axios.request).toHaveBeenCalledWith({
      url,
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data?.results.length).toBeGreaterThan(0);
    expect(result.current.error).toBe(null);
  });

  // Handle errors for question data
  it("should handle question data errors", async () => {
    const url = "/api.php?amount=1&category=9&difficulty=easy";
    const errorMessage = "An error occurred";
    (
      axios.request as jest.MockedFunction<typeof axios.request>
    ).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<IquestionResponseData>(url)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(axios.request).toHaveBeenCalledWith({
      url,
    });
    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error(errorMessage));
  });
});
