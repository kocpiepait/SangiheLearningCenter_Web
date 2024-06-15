// import { createApp, h } from "react";
// import { createInertiaApp } from "@inertiajs/inertia-react";
// import { InertiaProgress } from "@inertiajs/progress";

// createInertiaApp({
//     resolve: (name) => require(`./Pages/${name}`).default,
//     setup({ el, App, props }) {
//         createApp({ render: () => h(App, props) }).mount(el);
//     },
// });

// InertiaProgress.init();

import "./bootstrap";
import "../css/app.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});

// import React from "react";
// import { createInertiaApp } from "@inertiajs/inertia-react";
// import { InertiaProgress } from "@inertiajs/progress";

// createInertiaApp({
//     resolve: (name) => require(`./Pages/${name}`),
//     setup({ el, App, props }) {
//         ReactDOM.render(<App {...props} />, el);
//     },
// });

// InertiaProgress.init();
