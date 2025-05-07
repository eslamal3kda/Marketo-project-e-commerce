import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import FAQPage from "./pages/FAQPage/FaqPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/TermsAndConditionsPage";
import AboutUsPage from "./pages/AboutPage/AboutUsPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProtectedRoute from "./layout/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import BlogCategorySection from "./components/BlogCategorySection/BlogCategorySection";
import SingleBlog from "./components/SingleBlog/SingleBlog";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";

export default function App() {
    const queryClient = new QueryClient();
    const Routing = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { path: "", element: <HomePage /> },
                { path: "/pages", element: <h2 className="page-test">Pages Page</h2> },
                { path: "/shop", element: <ShopPage /> },
                { path: "/faq", element: <FAQPage /> },
                { path: "/contact", element: <ContactPage /> },
                { path: "/about-us", element: <AboutUsPage /> },
                { path: "/products", element: <ProductsPage /> },
                { path: "/products/:id/:product-categ", element: <SingleProductPage /> },
                { path: "/terms-and-conditions", element: <TermsAndConditionsPage /> },
                { path: "/wishlist", element: <WishlistPage /> },
                { path: "/shopping-cart", element: <ShoppingCartPage /> },
                {
                    path: "/blogs", element: <BlogsPage />, children: [
                    {path: ":blog-category?" , element:<BlogCategorySection />},
                    {path: ":blog-category/:id" , element:<SingleBlog />},
                    {path: "*" , element:<section className='blogs-container'> <h1>page not founded</h1>  </section>},
                ] },
                {
                    path: "/dashboard",
                    element: (
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    ),
                },
                { path: "*", element: <h2 className="page-test">Page Not Founded</h2> },
            ],
        },
        { path: "/login", element: <LoginPage /> },
    ]);
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Toaster position="bottom-center" reverseOrder={false} />
                <RouterProvider router={Routing} />
            </AuthProvider>
        </QueryClientProvider>
    );
}
