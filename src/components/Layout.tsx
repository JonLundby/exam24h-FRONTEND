import NavHeader from "./NavHeader/NavHeader";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <NavHeader />
            {children}
            <Footer />
        </div>
    );
}
