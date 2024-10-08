import ReactDDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { route } from "../../vendor/tightenco/ziggy";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDDOMServer.renderToString,
        resolve: (name) =>
            resolvePageComponent(
                `./pages/${name}.jsx`,
                import.meta.glob("./pages/**/*.jsx")
            ),
        setup: ({ App, props }) => {
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);
