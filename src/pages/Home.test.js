import { render, screen, waitFor } from "@testing-library/react";
import * as router from "react-router";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";

describe("Home Component", () => {
  const initialState = { fav: { favCount: 10 }, theme: { theme: "light" } };
  const mockStore = configureStore();
  let store;

  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  test("it displays the Home page", () => {
    store = mockStore(initialState);

    // render(
    //   <Provider store={store}>
    //     <Home />
    //   </Provider>
    // );

    // expect(getByText('Hello World!')).not.toBeNull();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const btn = screen.getByTestId("order-now-btn");

    expect(btn).not.toBeNull();
  });
});
