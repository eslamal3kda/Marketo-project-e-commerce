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
                { path: "/terms-and-conditions", element: <TermsAndConditionsPage /> },
                {
                    path: "/blogs", element: <BlogsPage />, children: [
                    {path: ":blog-category?" , element:<BlogCategorySection />},
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
                { path: "/wishlist", element: <h2 className="page-test">Wishlist Page</h2> },
                { path: "*", element: <h2 className="page-test">Page Not Founded</h2> },
            ],
        },
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
