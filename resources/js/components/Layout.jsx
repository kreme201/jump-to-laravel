import { Link } from "@inertiajs/react";

export default function Layout({ user = null, children }) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <Link href={route("index")} className="navbar-brand">
                            Laravel Board
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle Navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {!user && (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("user.form")}
                                            >
                                                회원가입
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                href={route("login")}
                                            >
                                                로그인
                                            </Link>
                                        </li>
                                    </>
                                )}
                                {user && (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                method="post"
                                                as="button"
                                                href={route("logout")}
                                            >
                                                로그아웃 ({user.name})
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container my-3">{children}</main>
        </>
    );
}
